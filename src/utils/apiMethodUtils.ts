import { Tsoa } from "@tsoa/runtime";
import { ApiMethod } from "../metadataGeneration/api/v0/search_by_name/core";


type URIEndpointArgs = unknown
type RequestPayload = unknown
type ResponsePayload = unknown


function parseToTsoaType(param:unknown):Tsoa.Type {
    console.log(param,typeof param);
  switch (typeof param) {
    case "object":
      // eslint-disable-next-line no-case-declarations
      const keys = Object.keys(param as object);
      // eslint-disable-next-line no-case-declarations
      const properties :Tsoa.Property[] = [];
      for (let i = 0; i < keys.length; i++) {
        properties.push({
          name: keys[i],
          required: true,
          type: parseToTsoaType(param ? param[keys[i] as keyof object] : "unknown"),
          validators: {},
        });
      }
      console.log(properties);

      return {
        dataType: "nestedObjectLiteral",
        properties: properties,
      };
    case "boolean":
      return {
        dataType: "boolean",
      };
    case "string":
      return {
        dataType: "string",
      };
    case "number":
      return {
        dataType: "float",
      };

    default:
      return {
        dataType: "object",
      };

  }
}


export function parseApiMethodToTsoaMethod(apiMethod:ApiMethod<URIEndpointArgs, RequestPayload, ResponsePayload>): Tsoa.Method {
    console.log(typeof apiMethod.responseType);
    console.log(typeof apiMethod.requestType,apiMethod.requestType);
  const tsoaMethod :Tsoa.Method = {
    method: apiMethod.getMethod().toLocaleLowerCase() as "get" | "post" | "put" | "delete" | "options" | "head" | "patch",
    description: "update with tsdocs or jsdocs or decoration later",
    name: "downknownyet",
    path: apiMethod.getEndpoint("id"),
    extensions: [],
    isHidden: false,
    type: parseToTsoaType("test"),
    security: [],
    responses: [{
      description: "updateLAter",
      name: "test",
      schema: parseToTsoaType(apiMethod.responseType),
    }],
    parameters: [
      {
        parameterName: "request payload",
        description: "update later",
        name: "test parameter",
        in: "body",
        type: parseToTsoaType(apiMethod.requestType),
        validators: {},
      },
    ],
  };
  return tsoaMethod;
}
