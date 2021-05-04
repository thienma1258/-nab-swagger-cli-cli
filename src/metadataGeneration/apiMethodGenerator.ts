import * as ts from 'typescript';
import { getDecorators, getDecoratorValues, getSecurites } from './../utils/decoratorUtils';
import { GenerateMetadataError } from './exceptions';
import { TypeResolver } from './typeResolver';
import { Tsoa } from '@tsoa/runtime';
import { MetadataSwaggerGeneratorV1 } from './metadataSwaggerGenerator_v1';
import { getHeaderType } from '../utils/headerTypeHelpers';
import { getExtensions } from './extension';
import { ParameterGeneratorV1 } from './parameterGenerator_v1';

export class ApiMethodGenerator {
  private readonly path?: string;
  private readonly tags?: string[];
  private readonly security: Tsoa.Security[];
  private readonly isHidden: boolean;
  private readonly commonResponses: Tsoa.Response[];

  constructor(
    private readonly node: ts.ClassDeclaration,
    private readonly current: MetadataSwaggerGeneratorV1,
    private readonly method: 'options' | 'get' | 'post' | 'put' | 'patch' | 'delete' | 'head',
    private readonly relativePath: string,
  ) {
    this.path = this.getPath();
    this.tags = this.getTags();
    this.security = this.getSecurity();
    this.isHidden = this.getIsHidden();
    this.commonResponses = this.getCommonResponses();
  }

  public IsValid() {
    return !!this.path || this.path === '';
  }

  public Generate(): Tsoa.Method {
    if (!this.node.parent) {
      throw new GenerateMetadataError("Controller node doesn't have a valid parent source file.");
    }
    if (!this.node.name) {
      throw new GenerateMetadataError("Controller node doesn't have a valid name.");
    }

    // const sourceFile = this.node.parent.getSourceFile();

    return this.buildMethod();
  }

  private buildMethod() {
    // find a way to build method
    const responses = this.commonResponses.concat(this.getMethodResponses());
    //build parameters
    const result: Tsoa.Method = {
      method: this.method,
      extensions: this.getExtensions(),
      name: (this.node.name as ts.Identifier).text,
      path: this.relativePath,
      parameters: this.buildParameters(),
      tags:this.tags,
      operationId: this.getOperationId(),
      responses: responses,
      security: this.security,
      isHidden: this.isHidden,
      type: {
        dataType: 'object',
      },
    };
    //   const methodGenerator = new MethodGeneratorV1(this.node,this.current,this.commonResponses,this.path,this.tags,this.security,this.isHidden)

    return result;
  }

  public getPath() {
    const decorators = getDecorators(this.node, identifier => identifier.text === 'Route');
    if (!decorators || !decorators.length) {
      return;
    }
    if (decorators.length > 1) {
      throw new GenerateMetadataError(`Only one Route decorator allowed in '${this.node.name!.text}' class.`);
    }

    const decorator = decorators[0];
    const expression = decorator.parent as ts.CallExpression;
    const decoratorArgument = expression.arguments[0] as ts.StringLiteral;
    return decoratorArgument ? `${decoratorArgument.text}` : '';
  }

  private getCommonResponses(): Tsoa.Response[] {
    const decorators = getDecorators(this.node, identifier => identifier.text === 'CommonResponse');
    if (!decorators || !decorators.length) {
      return [];
    }

    return decorators.map(decorator => {
      const expression = decorator.parent as ts.CallExpression;

      const [name, description, example] = getDecoratorValues(decorator, this.current.typeChecker);
      if (!name) {
        throw new GenerateMetadataError(`Controller's responses should have an explicit name.`);
      }

      return {
        description: description || '',
        examples: example === undefined ? undefined : [example],
        name,
        schema: expression.typeArguments && expression.typeArguments.length > 0 ? new TypeResolver(expression.typeArguments[0], this.current).resolve() : undefined,
        headers: getHeaderType(expression.typeArguments, 1, this.current),
      } as Tsoa.Response;
    });
  }

  private getTags() {
    const decorators = getDecorators(this.node, identifier => identifier.text === 'Tags');
    if (!decorators || !decorators.length) {
      return;
    }
    if (decorators.length > 1) {
      throw new GenerateMetadataError(`Only one Tags decorator allowed in '${this.node.name!.text}' class.`);
    }

    const decorator = decorators[0];
    const expression = decorator.parent as ts.CallExpression;

    return expression.arguments.map((a: any) => a.text as string);
  }

  private getSecurity(): Tsoa.Security[] {
    const noSecurityDecorators = getDecorators(this.node, identifier => identifier.text === 'NoSecurity');
    const securityDecorators = getDecorators(this.node, identifier => identifier.text === 'Security');

    if (noSecurityDecorators?.length) {
      throw new GenerateMetadataError(`NoSecurity decorator is unnecessary in '${this.node.name!.text}' class.`);
    }

    if (!securityDecorators || !securityDecorators.length) {
      return [];
    }

    return securityDecorators.map(d => getSecurites(d, this.current.typeChecker));
  }

  private getIsHidden(): boolean {
    const hiddenDecorators = getDecorators(this.node, identifier => identifier.text === 'Hidden');
    if (!hiddenDecorators || !hiddenDecorators.length) {
      return false;
    }
    if (hiddenDecorators.length > 1) {
      throw new GenerateMetadataError(`Only one Hidden decorator allowed in '${this.node.name!.text}' class.`);
    }

    return true;
  }

  private getExtensions() {
    const extensionDecorators = this.getDecoratorsByIdentifier(this.node, 'Extension');
    if (!extensionDecorators || !extensionDecorators.length) {
      return [];
    }
    return getExtensions(extensionDecorators, this.current);
  }

  private getDecoratorsByIdentifier(node: ts.Node, id: string) {
    return getDecorators(node, identifier => identifier.text === id);
  }

  private getOperationId() {
    const opDecorators = this.getDecoratorsByIdentifier(this.node, 'OperationId');
    if (!opDecorators || !opDecorators.length) {
      return undefined;
    }
    if (opDecorators.length > 1) {
      throw new GenerateMetadataError(`Only one OperationId decorator allowed in '${this.getCurrentLocation()}' method.`);
    }

    const values = getDecoratorValues(opDecorators[0], this.current.typeChecker);
    return values && values[0];
  }

  private getCurrentLocation() {
    const methodId = this.node.name as ts.Identifier;
    return `${methodId.text}`;
  }

  private getMethodResponses(): Tsoa.Response[] {
    for (let i = 0; i < this.node.members.length; i++) {
      if (this.node.members[i].kind === ts.SyntaxKind.PropertyDeclaration) {
        const nodeMember = this.node.members[i] as ts.PropertyDeclaration
        const decorators = this.getDecoratorsByIdentifier(nodeMember, 'Response');
        if (!decorators || !decorators.length) {
          continue;
        }

        return decorators.map(decorator => {
          const expression = decorator.parent as ts.CallExpression;

          const [name, description, example] = getDecoratorValues(decorator, this.current.typeChecker);

          return {
            description: description || '',
            examples: example === undefined ? undefined : [example],
            name: name || '200',
            schema: expression.typeArguments && expression.typeArguments.length > 0 ? new TypeResolver(expression.typeArguments[0], this.current).resolve() : undefined,
            headers: getHeaderType(expression.typeArguments, 1, this.current),
          } as Tsoa.Response;
        });
      }
    }
    return [];
  }

  private buildParameters() {
    const parameters = this.node.members
      .map(p => {
        try {
          return new ParameterGeneratorV1(p as ts.PropertyDeclaration, this.method, this.relativePath, this.current).Generate();
        } catch (e) {
          const methodId = this.node.name as ts.Identifier;
          throw new GenerateMetadataError(`${String(e.message)} \n in '${methodId.text}'`);
        }
      })
      .filter((p): p is Tsoa.Parameter => p !== null);
    const bodyParameters = parameters.filter(p => p.in === 'body');
    const bodyProps = parameters.filter(p => p.in === 'body-prop');

    const hasFormDataParameters = parameters.some(p => p.in === 'formData');
    const hasBodyParameter = bodyProps.length + bodyParameters.length > 0;
      console.log(bodyParameters);
    if (bodyParameters.length > 1) {
      throw new GenerateMetadataError(`Only one body parameter allowed in '${this.getCurrentLocation()}' method.`);
    }
    if (bodyParameters.length > 0 && bodyProps.length > 0) {
      throw new GenerateMetadataError(`Choose either during @Body or @BodyProp in '${this.getCurrentLocation()}' method.`);
    }
    if (hasBodyParameter && hasFormDataParameters) {
      throw new Error(`@Body or @BodyProp cannot be used with @FormField, @UploadedFile, or @UploadedFiles in '${this.getCurrentLocation()}' method.`);
    }
    return parameters;
  }
}
