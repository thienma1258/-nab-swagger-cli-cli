import * as ts from 'typescript';
import { getJSDocTags } from './../utils/jsDocUtils';
import { getParameterValidators } from './../utils/validatorUtils';
import { GenerateMetadataError } from './exceptions';
import { Tsoa } from '@tsoa/runtime';
import { TypeResolver } from './typeResolver';
import { MetadataSwaggerGeneratorV1 } from './metadataSwaggerGenerator_v1';
import { getDecorators, getDecoratorValues, getNodeFirstDecoratorValue } from '../utils/decoratorUtils';
import { getInitializerValue } from './initializer-value';

export class ParameterGeneratorV1 {
  constructor(private readonly property: ts.PropertyDeclaration, private readonly method: string,  private readonly current: MetadataSwaggerGeneratorV1) {}

  public Generate(): Tsoa.Parameter | null {
    const decorators = getDecorators(this.property, identifier => identifier.text === 'Request');
    let decoration: ts.Identifier = decorators[0];
    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
    let type: string = ''; //default
    if (decorators.length === 0) {
      return null;
    }
    for (let i = 0; i < decorators.length; i++) {
      decoration = decorators[i];
      const [decorationType, _description, _example] = getDecoratorValues(decoration, this.current.typeChecker);
      type = decorationType;
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    }

    if (typeof type === "undefined" || type.length === 0) {
      return null;
    }


    switch (type) {
      case 'request':
        return this.getRequestParameter(this.property);
      case 'body':
        return this.getBodyParameter(this.property, decoration);
      case 'bodyprop':
        return this.getBodyPropParameter(this.property);
      case 'formfield':
        return this.getFormFieldParameter(this.property);
      case 'header':
        return this.getHeaderParameter(this.property);
      case 'query':
        return this.getQueryParameter(this.property);
      case 'path':
        return this.getPathParameter(this.property,decoration);
      default:
        return this.getPathParameter(this.property,decoration);
    }
  }

  private getRequestParameter(parameter: ts.PropertyDeclaration): Tsoa.Parameter {
    const parameterName = (parameter.name as ts.Identifier).text;
    return {
      description: this.getParameterDescription(parameter),
      in: 'request',
      name: parameterName,
      parameterName,
      required: !parameter.questionToken && !parameter.initializer,
      type: { dataType: 'object' },
      validators: getParameterValidators(this.property, parameterName),
    };
  }

  //   private getResParameter(parameter: ts.PropertyDeclaration): Tsoa.ResParameter {
  //     const parameterName = (parameter.name as ts.Identifier).text;
  //     const decorator = getNodeFirstDecoratorValue(this.property, this.current.typeChecker, ident => ident.text === 'Res') || parameterName;
  //     if (!decorator) {
  //       throw new GenerateMetadataError('Could not find Decorator', parameter);
  //     }

  //     const typeNode = parameter.type;

  //     if (!typeNode || !ts.isTypeReferenceNode(typeNode) || typeNode.typeName.getText() !== 'TsoaResponse') {
  //       throw new GenerateMetadataError('@Res() requires the type to be TsoaResponse<HTTPStatusCode, ResBody>', parameter);
  //     }

  //     if (!typeNode.typeArguments || !typeNode.typeArguments[0]) {
  //       throw new GenerateMetadataError('@Res() requires the type to be TsoaResponse<HTTPStatusCode, ResBody>', parameter);
  //     }

  //     const statusArgument = typeNode.typeArguments[0];
  //     const statusArgumentType = this.current.typeChecker.getTypeAtLocation(statusArgument);

  //     const isNumberLiteralType = (tsType: ts.Type): tsType is ts.NumberLiteralType => {
  //       // eslint-disable-next-line no-bitwise
  //       return (tsType.getFlags() & ts.TypeFlags.NumberLiteral) !== 0;
  //     };

  //     if (!isNumberLiteralType(statusArgumentType)) {
  //       throw new GenerateMetadataError('@Res() requires the type to be TsoaResponse<HTTPStatusCode, ResBody>', parameter);
  //     }

  //     const status = String(statusArgumentType.value);

  //     const type = new TypeResolver(typeNode.typeArguments[1], this.current, typeNode).resolve();

  //     return {
  //       description: this.getParameterDescription(parameter) || '',
  //       in: 'res',
  //       name: status,
  //       parameterName,
  //       examples: this.getParameterExample(parameter, parameterName),
  //       required: true,
  //       type,
  //       schema: type,
  //       validators: {},
  //       headers: getHeaderType(typeNode.typeArguments, 2, this.current),
  //     };
  //   }

  private getBodyPropParameter(parameter: ts.PropertyDeclaration): Tsoa.Parameter {
    const parameterName = (parameter.name as ts.Identifier).text;
    const type = this.getValidatedType(parameter);

    if (!this.supportBodyMethod(this.method)) {
      throw new GenerateMetadataError(`@BodyProp('${parameterName}') Can't support in ${this.method.toUpperCase()} method.`);
    }

    const param: Tsoa.Parameter = {
      default: getInitializerValue(parameter.initializer,this.current.typeChecker,type),
      description: this.getParameterDescription(parameter),
      example: this.getParameterExample(parameter, parameterName),
      in: 'body-prop',
      name: getNodeFirstDecoratorValue(this.property, this.current.typeChecker, ident => ident.text === 'BodyProp') || parameterName,
      parameterName,
      required: !parameter.questionToken && !parameter.initializer,
      type,
      validators: getParameterValidators(this.property, parameterName),
    };
    return param;
  }

  private getBodyParameter(parameter: ts.PropertyDeclaration, decoration: ts.Identifier): Tsoa.Parameter {
    const parameterName = (parameter.name as ts.Identifier).text;

    if (!this.supportBodyMethod(this.method)) {
      throw new GenerateMetadataError(`@Body('${parameterName}') Can't support in ${this.method.toUpperCase()} method.`);
    }

    const type  =this.getValidatedType(parameter);
    const [_type, description, example] = getDecoratorValues(decoration, this.current.typeChecker);
    let typeNode = parameter.type;
    if (!typeNode) {
      const type = this.current.typeChecker.getTypeAtLocation(parameter);
      typeNode = this.current.typeChecker.typeToTypeNode(type, undefined, ts.NodeBuilderFlags.NoTruncation) as ts.TypeNode;
    }
    
  
    const param: Tsoa.Parameter = {
      default: getInitializerValue(parameter.initializer,this.current.typeChecker,type),
      description: description,
      in: 'body',
      name: typeNode.getFullText(),
      example: typeof example !== "undefined" ?[example]:[],
      parameterName,
      required: !parameter.questionToken && !parameter.initializer,
      type,
      validators: getParameterValidators(this.property, parameterName),
    };

    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    return param;
  }

  private getHeaderParameter(parameter: ts.PropertyDeclaration): Tsoa.Parameter {
    const parameterName = (parameter.name as ts.Identifier).text;
    const type = this.getValidatedType(parameter);

    if (!this.supportPathDataType(type)) {
      throw new GenerateMetadataError(`@Header('${parameterName}') Can't support '${type.dataType}' type.`);
    }

    return {
      default: getInitializerValue(parameter.initializer,this.current.typeChecker,type),
      description: this.getParameterDescription(parameter),
      example: this.getParameterExample(parameter, parameterName),
      in: 'header',
      name: getNodeFirstDecoratorValue(this.property, this.current.typeChecker, ident => ident.text === 'Header') || parameterName,
      parameterName,
      required: !parameter.questionToken && !parameter.initializer,
      type,
      validators: getParameterValidators(this.property, parameterName),
    };
  }

  //   private getUploadedFileParameter(parameter: ts.PropertyDeclaration, isArray?: boolean): Tsoa.Parameter {
  //     const parameterName = (parameter.name as ts.Identifier).text;
  //     const elementType: Tsoa.Type = { dataType: 'file' };
  //     let type: Tsoa.Type;
  //     if (isArray) {
  //       type = { dataType: 'array', elementType };
  //     } else {
  //       type = elementType;
  //     }

  //     if (!this.supportPathDataType(elementType)) {
  //       throw new GenerateMetadataError(`Parameter '${parameterName}:${type.dataType}' can't be passed as an uploaded file(s) parameter in '${this.method.toUpperCase()}'.`, parameter);
  //     }

  //     return {
  //       description: this.getParameterDescription(parameter),
  //       in: 'formData',
  //       name:
  //         getNodeFirstDecoratorValue(this.property, this.current.typeChecker, ident => {
  //           if (isArray) {
  //             return ident.text === 'UploadedFiles';
  //           }
  //           return ident.text === 'UploadedFile';
  //         }) ?? parameterName,
  //       required: !parameter.questionToken && !parameter.initializer,
  //       type,
  //       parameterName,
  //       validators: getParameterValidators(this.property, parameterName),
  //     };
  //   }

  private getFormFieldParameter(parameter: ts.PropertyDeclaration): Tsoa.Parameter {
    const parameterName = (parameter.name as ts.Identifier).text;
    const type: Tsoa.Type = { dataType: 'string' };

    if (!this.supportPathDataType(type)) {
      throw new GenerateMetadataError(`Parameter '${parameterName}:${type.dataType}' can't be passed as form field parameter in '${this.method.toUpperCase()}'.`, parameter);
    }

    return {
      description: this.getParameterDescription(parameter),
      in: 'formData',
      name: getNodeFirstDecoratorValue(this.property, this.current.typeChecker, ident => ident.text === 'FormField') ?? parameterName,
      required: !parameter.questionToken && !parameter.initializer,
      type,
      parameterName,
      validators: getParameterValidators(this.property, parameterName),
    };
  }

  private getQueryParameter(parameter: ts.PropertyDeclaration): Tsoa.Parameter | null {
    const parameterName = (parameter.name as ts.Identifier).text;
    const type = this.getValidatedType(parameter);

    const commonProperties = {
      default: getInitializerValue(parameter.initializer,this.current.typeChecker,type),
      description: this.getParameterDescription(parameter),
      example: this.getParameterExample(parameter, parameterName),
      in: 'query' as const,
      name: getNodeFirstDecoratorValue(this.property, this.current.typeChecker, ident => ident.text === 'Query') || parameterName,
      parameterName,
      required: !parameter.questionToken && !parameter.initializer,
      validators: getParameterValidators(this.property, parameterName),
    };

    if (this.getQueryParamterIsHidden(parameter)) {
      if (commonProperties.required) {
        throw new GenerateMetadataError(`@Query('${parameterName}') Can't support @Hidden because it is required (does not allow undefined and does not have a default value).`);
      }
      return null;
    }

    if (type.dataType === 'array') {
      const arrayType = type;
      if (!this.supportPathDataType(arrayType.elementType)) {
        throw new GenerateMetadataError(`@Query('${parameterName}') Can't support array '${arrayType.elementType.dataType}' type.`);
      }
      return {
        ...commonProperties,
        collectionFormat: 'multi',
        type: arrayType,
      } as Tsoa.ArrayParameter;
    }

    if (!this.supportPathDataType(type)) {
      throw new GenerateMetadataError(`@Query('${parameterName}') Can't support '${type.dataType}' type.`);
    }

    return {
      ...commonProperties,
      type,
    };
  }

  private getPathParameter(parameter: ts.PropertyDeclaration, decoration: ts.Identifier): Tsoa.Parameter {
    const parameterName = (parameter.name as ts.Identifier).text;


    // if (!this.supportPathDataType(type)) {
    //   throw new GenerateMetadataError(`@Path('${parameterName}') Can't support '${type.dataType}' type.`);
    // }
    // if (!this.path.includes(`{${pathName}}`) && !this.path.includes(`:${pathName}`)) {
    //   throw new GenerateMetadataError(`@Path('${parameterName}') Can't match in URL: '${this.path}'.`);
    // }

    const type  =this.getValidatedType(parameter);
    const [_type, description, example] = getDecoratorValues(decoration, this.current.typeChecker);
    let typeNode = parameter.type;
    if (!typeNode) {
      const typeData = this.current.typeChecker.getTypeAtLocation(parameter);
      typeNode = this.current.typeChecker.typeToTypeNode(typeData, undefined, ts.NodeBuilderFlags.NoTruncation) as ts.TypeNode;
    }

    const propertyParamsSplit = parameter.getText().split("\n");
    let pathName = parameterName;
    const propertyText =propertyParamsSplit[propertyParamsSplit.length-1]
    const splitPropertyAndType = propertyText.split(":")
    const property = splitPropertyAndType[0].replace(/[\W_]+/g," ").trim()
    if (property.length >0){
      pathName=property
    }

    return {
      default: getInitializerValue(parameter.initializer,this.current.typeChecker,type),
      description: description,
      example: typeof example !== "undefined" ?[example]:[],
      in: 'path',
      name: pathName,
      parameterName,
      required: true,
      type,
      validators: getParameterValidators(this.property, parameterName),
    };
  }

  private getParameterDescription(node: ts.PropertyDeclaration) {
    const symbol = this.current.typeChecker.getSymbolAtLocation(node.name);
    if (!symbol) {
      return undefined;
    }

    const comments = symbol.getDocumentationComment(this.current.typeChecker);
    if (comments.length) {
      return ts.displayPartsToString(comments);
    }

    return undefined;
  }

  private getParameterExample(node: ts.PropertyDeclaration, parameterName: string) {
    const examples = getJSDocTags(node.parent, tag => (tag.tagName.text === 'example' || tag.tagName.escapedText === 'example') && !!tag.comment && tag.comment.startsWith(parameterName)).map(tag =>
      (tag.comment || '').replace(`${parameterName} `, '').replace(/\r/g, ''),
    );

    if (examples.length === 0) {
      return undefined;
    } else {
      try {
        return examples.map(example => JSON.parse(example));
      } catch (e) {
        throw new GenerateMetadataError(`JSON format is incorrect: ${String(e.message)}`);
      }
    }
  }

  private supportBodyMethod(method: string) {
    return ['post', 'put', 'patch', 'delete'].some(m => m === method.toLowerCase());
  }

  //   private supportParameterDecorator(decoratorName: string) {
  //     return ['header', 'query', 'path', 'body', 'bodyprop', 'request', 'res', 'inject', 'uploadedfile', 'uploadedfiles', 'formfield'].some(d => d === decoratorName.toLocaleLowerCase());
  //   }

  private supportPathDataType(parameterType: Tsoa.Type) {
    const supportedPathDataTypes: Tsoa.TypeStringLiteral[] = ['string', 'integer', 'long', 'float', 'double', 'date', 'datetime', 'buffer', 'boolean', 'enum', 'refEnum', 'file', 'any'];
    if (supportedPathDataTypes.find(t => t === parameterType.dataType)) {
      return true;
    }

    if (parameterType.dataType === 'refAlias') {
      return this.supportPathDataType(parameterType.type);
    }

    if (parameterType.dataType === 'union') {
      return !parameterType.types.map(t => this.supportPathDataType(t)).some(t => t === false);
    }

    return false;
  }

  private getValidatedType(parameter: ts.PropertyDeclaration) {
    let typeNode = parameter.type;
    if (!typeNode) {
      const type = this.current.typeChecker.getTypeAtLocation(parameter);
      typeNode = this.current.typeChecker.typeToTypeNode(type, undefined, ts.NodeBuilderFlags.NoTruncation) as ts.TypeNode;
    }
    return new TypeResolver(typeNode, this.current, parameter).resolve();
  }

  private getQueryParamterIsHidden(parameter: ts.PropertyDeclaration) {
    const hiddenDecorators = getDecorators(parameter, identifier => identifier.text === 'Hidden');
    if (!hiddenDecorators || !hiddenDecorators.length) {
      return false;
    }

    return true;
  }
}
