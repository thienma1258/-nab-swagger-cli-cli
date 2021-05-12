import * as ts from 'typescript';
import { GenerateMetadataError } from './exceptions';
import { Tsoa } from '@tsoa/runtime';
import { TypeResolver } from './typeResolver';
import glob = require('glob');
import path = require('path');
import { ApiMethodGenerator } from './apiMethodGenerator';

export class MetadataSwaggerGeneratorV1 {
  public readonly nodes = new Array<ts.Node>();
  public readonly typeChecker: ts.TypeChecker;
  private readonly program: ts.Program;
  private referenceTypeMap: Tsoa.ReferenceTypeMap = {};
  private circularDependencyResolvers = new Array<(referenceTypes: Tsoa.ReferenceTypeMap) => void>();
  private relativePath :string;

  public IsExportedNode(_node: ts.Node) {
    return true;
  }

  constructor(dirPath: string, private readonly compilerOptions?: ts.CompilerOptions) {
    TypeResolver.clearCache();
    if(dirPath.includes("./")){
      this.relativePath=dirPath.replace("./",process.cwd()+"/")
    }
    this.program = this.getControllerProgramFromDirPath()
    this.typeChecker = this.program.getTypeChecker();
  }

  public Generate(): Tsoa.Metadata {
    this.extractNodeFromProgramSourceFiles();

    const controllers = this.buildControllers();

    this.checkForMethodSignatureDuplicates(controllers);
    this.checkForPathParamSignatureDuplicates(controllers);
    this.circularDependencyResolvers.forEach(c => c(this.referenceTypeMap));

    return {
      controllers,
      referenceTypeMap: this.referenceTypeMap,
    };
  }

  private getControllerProgramFromDirPath() {
    const files = glob.sync(`${this.relativePath}/**/*.{js,ts}`).reverse();
    files.forEach(file => {
      const relativePath = file.substring(__dirname.length);
      const method = path.basename(relativePath, path.extname(relativePath)).toLowerCase();
      if (method.endsWith('.d')) {
        // *.d.ts
        return;
      }
    })
    if (files.length === 0) {
      throw new GenerateMetadataError(`[${files.join(', ')}] globs found 0 controllers.`);
    }

    return ts.createProgram(files, this.compilerOptions || {});
  }

  private extractNodeFromProgramSourceFiles() {
    this.program.getSourceFiles().forEach(sf => {
      ts.forEachChild(sf, node => {
        /**
         * If we declare a namespace within a module, like we do in `tsoaTestModule.d.ts`,
         * we need to explicitly get the children of the module declaration
         * (`declare module 'tsoaTest'`) - which are the moduleBlock statements,
         * because otherwise our type resolver cannot iterate over namespaces defined in that module.
         */
        if (ts.isModuleDeclaration(node)) {
          // console.log(sf.fileName);
          /**
           * For some reason unknown to me, TS resolves both `declare module` and `namespace` to
           * the same kind (`ModuleDeclaration`). In order to figure out whether it's one or the other,
           * we check the node flags. They tell us whether it is a namespace or not.
           */
          // eslint-disable-next-line no-bitwise
          if ((node.flags & ts.NodeFlags.Namespace) === 0 && node.body && ts.isModuleBlock(node.body)) {
            node.body.statements.forEach(statement => {
              this.nodes.push(statement);
            });
            return;
          }
        }

        this.nodes.push(node);
      });
    });
  }

  private checkForMethodSignatureDuplicates = (controllers: Tsoa.Controller[]) => {
    const map: Tsoa.MethodsSignatureMap = {};
    controllers.forEach(controller => {
      controller.methods.forEach(method => {
        const signature = method.path ? `@${method.method}(${controller.path}/${method.path})` : `@${method.method}(${controller.path})`;
        const methodDescription = `${controller.name}#${method.name}`;

        if (map[signature]) {
          map[signature].push(methodDescription);
        } else {
          map[signature] = [methodDescription];
        }
      });
    });

    let message = '';
    Object.keys(map).forEach(signature => {
      const controllers = map[signature];
      if (controllers.length > 1) {
        message += `Duplicate method signature ${signature} found in controllers: ${controllers.join(', ')}\n`;
      }
    });

    if (message) {
      throw new GenerateMetadataError(message);
    }
  };

  private checkForPathParamSignatureDuplicates = (controllers: Tsoa.Controller[]) => {
    const paramRegExp = new RegExp('{(\\w*)}|:(\\w+)', 'g');
    type RouteCollision = {
      type: PathDuplicationType;
      method: Tsoa.Method;
      controller: Tsoa.Controller;
      collidesWith: Tsoa.Method[];
    };

    enum PathDuplicationType {
      FULL, // Fully duplicate.
      PARTIAL, // Collides, check order or fix route
    }

    const collisions: RouteCollision[] = [];

    function addCollision(type: PathDuplicationType, method: Tsoa.Method, controller: Tsoa.Controller, collidesWith: Tsoa.Method) {
      let existingCollision = collisions.find(collision => collision.type === type && collision.method === method && collision.controller === controller);
      if (!existingCollision) {
        existingCollision = {
          type,
          method,
          controller,
          collidesWith: [],
        };
        collisions.push(existingCollision);
      }

      existingCollision.collidesWith.push(collidesWith);
    }

    controllers.forEach(controller => {
      const methodRouteGroup: {
        [key: string]: Array<{
          path: string;
          method: Tsoa.Method;
        }>;
      } = {};
      // Group all ts methods with HTTP method decorator into same object in same controller.
      controller.methods.forEach(method => {
        if (methodRouteGroup[method.method] === undefined) {
          methodRouteGroup[method.method] = [];
        }

        const params = method.path.match(paramRegExp);

        methodRouteGroup[method.method].push({
          method, // method.name + ": " + method.path) as any,
          path:
            params?.reduce((s, a) => {
              // replace all params with {} placeholder for comparison
              return s.replace(a, '{}');
            }, method.path) || method.path,
        });
      });

      Object.keys(methodRouteGroup).forEach((key: string) => {
        const methodRoutes = methodRouteGroup[key];

        // check each route with the routes that are defined before it
        for (let i = 0; i < methodRoutes.length; i += 1) {
          for (let j = 0; j < i; j += 1) {
            if (methodRoutes[i].path === methodRoutes[j].path) {
              // full match
              addCollision(PathDuplicationType.FULL, methodRoutes[i].method, controller, methodRoutes[j].method);
            } else if (
              methodRoutes[i].path.split('/').length === methodRoutes[j].path.split('/').length &&
              methodRoutes[j].path
                .substr(methodRoutes[j].path.lastIndexOf('/')) // compare only the "last" part of the path
                .split('/')
                .some(v => !!v) && // ensure the comparison path has a value
              methodRoutes[i].path.split('/').every((v, index) => {
                const comparisonPathPart = methodRoutes[j].path.split('/')[index];
                // if no params, compare values
                if (!v.includes('{}')) {
                  return v === comparisonPathPart;
                }
                // otherwise check if route starts with comparison route
                return v.startsWith(methodRoutes[j].path.split('/')[index]);
              })
            ) {
              // partial match - reorder routes!
              addCollision(PathDuplicationType.PARTIAL, methodRoutes[i].method, controller, methodRoutes[j].method);
            }
          }
        }
      });
    });

    // print warnings for each collision (grouped by route)
    collisions.forEach(collision => {
      let message = '';
      if (collision.type === PathDuplicationType.FULL) {
        message = `Duplicate path parameter definition signature found in controller `;
      } else if (collision.type === PathDuplicationType.PARTIAL) {
        message = `Overlapping path parameter definition signature found in controller `;
      }
      message += collision.controller.name;
      message += ` [ method ${collision.method.method.toUpperCase()} ${collision.method.name} route: ${collision.method.path} ] collides with `;
      message += collision.collidesWith
        .map((method: Tsoa.Method) => {
          return `[ method ${method.method.toUpperCase()} ${method.name} route: ${method.path} ]`;
        })
        .join(', ');

      message += '\n';
      console.warn(message);
    });
  };

  public TypeChecker() {
    return this.typeChecker;
  }

  public AddReferenceType(referenceType: Tsoa.ReferenceType) {
    if (!referenceType.refName) {
      return;
    }
    this.referenceTypeMap[referenceType.refName] = referenceType;
  }

  public GetReferenceType(refName: string) {
    return this.referenceTypeMap[refName];
  }

  public OnFinish(callback: (referenceTypes: Tsoa.ReferenceTypeMap) => void) {
    this.circularDependencyResolvers.push(callback);
  }

  private buildControllers() {

    const controllers :Tsoa.Controller[]=[]
    const methods :Record<string,Tsoa.Method[]>={}
    const basePath = this.relativePath.substring(0,this.relativePath.lastIndexOf("/"));
    for(let i=0;i< this.nodes.length;i++){
      const node = this.nodes[i];
      if ( node.kind === ts.SyntaxKind.ClassDeclaration && this.IsExportedNode(node as ts.ClassDeclaration)){
        const classDeclaration = node as ts.ClassDeclaration;
        const fileName =classDeclaration.getSourceFile().fileName
        const relativePath = fileName.substring(basePath.length);
        const method = path.basename(relativePath, path.extname(relativePath)).toLowerCase();
        let apiPath = relativePath.substring(0,relativePath.lastIndexOf("/"))
        const indexOfApiPAth = apiPath.indexOf("/api")
        if (indexOfApiPAth === -1){
          continue;
        }
        apiPath=apiPath.substring(indexOfApiPAth)
        //gonna get method declaration;
        const apiMethodGenerator = new ApiMethodGenerator(classDeclaration,this,method as 'options' | 'get' | 'post' | 'put' | 'patch' | 'delete' | 'head',apiPath)
        const route = apiMethodGenerator.getPath()
        if (typeof route !== "undefined"){
          if(typeof methods[route]=== "undefined"){
            methods[route]=[]
        }
        methods[route].push(apiMethodGenerator.Generate())
        }
      }
    }

    const routeNames= Object.keys(methods);

    for(let i=0;i<routeNames.length;i++){ 
      const routeName = routeNames[i];
      const tsoaMethods = methods[routeName];
      const controller :Tsoa.Controller = {
        location:"",
        methods:tsoaMethods,
        name:routeName,
        path:"",
      }
      controllers.push(controller);

    }
 
      return controllers
  }
}
