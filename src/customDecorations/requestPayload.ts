type requestType = 'header' | 'query' | 'path'| 'body'| 'bodyprop'| 'request'| 'uploadedfile'| 'uploadedfiles'| 'formfield';

export function Request<T>(type:requestType,description:string,exampleModel?: T): Function {
    return () => {
      return;
    };
  }
  