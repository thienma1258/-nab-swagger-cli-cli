import * as ts from 'typescript';
import { ExtendedRoutesConfig, ExtendedSpecConfig } from '../cli';
import { Tsoa } from '@tsoa/runtime';
import * as express from 'express';
import { MetadataSwaggerGeneratorV1 } from '../metadataGeneration/metadataSwaggerGenerator_v1';
import {  getInitializerValueFromType } from '../metadataGeneration/initializer-value';

export const getSwaggerOutputPath = (swaggerConfig: ExtendedSpecConfig) => {
  const ext = swaggerConfig.yaml ? 'yaml' : 'json';
  const specFileBaseName = swaggerConfig.specFileBaseName || 'swagger';

  return `${swaggerConfig.outputDirectory}/${specFileBaseName}.${ext}`;
};

export const registerRouteMockApi =  (
  swaggerConfig: ExtendedSpecConfig,
  routeConfig :ExtendedRoutesConfig,
  app:express.Router,
  compilerOptions?: ts.CompilerOptions,
  /**
   * pass in cached metadata returned in a previous step to speed things up
   */
  metadata?: Tsoa.Metadata,
) => {
  if (!metadata) {
    metadata = new MetadataSwaggerGeneratorV1(routeConfig.routesDir,compilerOptions).Generate();
  }

  if(!metadata){
      return
  }

  metadata.controllers.forEach(controller =>{
    controller.methods.forEach(method =>{

      const path = method.path;
      const para = method.parameters;
      const res= method.responses[0]
      switch(method.method){
        case "get":
          app.get(method.path,execMockFunc(path,para,res));
          break; 
        case "post":
          app.post(method.path,execMockFunc(path,para,res));
          break; 
        case "put":
          app.put(method.path,execMockFunc(path,para,res));
          break;
        case "delete":
          app.delete(method.path,execMockFunc(path,para,res));
          break;
        case "patch":
          app.patch(method.path,execMockFunc(path,para,res));

          break;
        default:
          app.post(method.path,execMockFunc(path,para,res));
          break
      }
  
    })
  })

};

function execMockFunc(path:string,para:Tsoa.Parameter[],mockRes:Tsoa.Response){
  return (req:express.Request,res:express.Response) =>{
    res.json({
      code:0,
      data: mockRes.examples? mockRes.examples[0] : getInitializerValueFromType(mockRes.schema)
    })
  };
}