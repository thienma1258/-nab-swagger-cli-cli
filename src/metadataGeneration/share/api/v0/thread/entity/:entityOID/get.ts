import { ApiMethod, METHOD } from "@localization-share/api/api";
import { EntityOID } from "@localization-share/entities/entity";
import { MethodDescription, Request, Response, Route, Security, Tags } from "nab-swagger-cli/dist/customDecorations";


type RequestPayload = void
type ResponsePayload = EntityOID[]

@Route("Thread")
@Tags("Thread")
@Security("BearerJWT")
@MethodDescription("Get all thread by entityOID")
export class GetThreadOIDsByEntityOIDMethod extends ApiMethod<EntityOID, RequestPayload, ResponsePayload> {

  @Request<EntityOID>("path", "EntityOID query all thread relate", "ls-project-3")
  entityOID?:EntityOID;


  @Response<ResponsePayload>("200", "OIDs of query result", ["ls-thread-3", "ls-thread-4"])
  res?: ResponsePayload;

}

const GetThreadOIDsByEntityOID = new GetThreadOIDsByEntityOIDMethod(
  METHOD.GET,
  (entityOID) => `/api/v0/thread/entity/${entityOID}`,
);


export default GetThreadOIDsByEntityOID;
