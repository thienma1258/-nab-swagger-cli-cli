
export type JSONData<T> = T extends Date ? string: {
    [K in keyof T]: JSONData<T[K]>
  }
  
  let rootApiEndpoint = "";
  export function setRootApiEndpoint(rootApi: string) {
    rootApiEndpoint = rootApi;
  }
  
  export enum METHOD {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
  }
  
  export class ApiMethod<URIEndpointArgs, RequestPayload, ResponsePayload> {
    getMethod() {
        return this.method;
    }
  
    private method: METHOD;
  
    private endpointCallback: (args: URIEndpointArgs) => string;
  
    constructor(method: METHOD, endpointGenerator: string | ((args: URIEndpointArgs) => string)) {
      this.method = method;
      if (typeof endpointGenerator === "string") {
        this.endpointCallback = () => endpointGenerator;
      } else {
        this.endpointCallback = endpointGenerator;
      }
    }
  
    getFetchOptions = (body: RequestPayload) => ({
      method: this.method,
      body: JSON.stringify(body),
    });
  
    getEndpoint = (args: URIEndpointArgs) => rootApiEndpoint + this.endpointCallback(args);
  
    responseType!: ResponsePayload; // use for getting type only(Ex: typeof ApiMethod.responseType);
  
    jsonResponseType!: JSONData<ResponsePayload>;
  
    requestType!: RequestPayload; // use for getting type only(Ex: typeof ApiMethod.requestType);
  
    jsonRequestType!: JSONData<ResponsePayload>;
  
  }
  
  

  