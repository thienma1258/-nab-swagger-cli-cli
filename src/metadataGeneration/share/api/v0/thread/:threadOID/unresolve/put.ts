import { ApiMethod, METHOD } from "@localization-share/api/api";
import { EntityOID } from "@localization-share/entities/entity";
import { MethodDescription, Request, Response, Route, Security, Tags } from "nab-swagger-cli/dist/customDecorations";


type RequestPayload = void
type ResponsePayload = void

@Route("Thread")
@Tags("Thread")
@Security("BearerJWT")
@MethodDescription("Un-resolve thread by oid")
export class UnResolveCommentMethod extends ApiMethod<EntityOID, RequestPayload, ResponsePayload> {

  @Response<void>("200", "Ok un-resolve success")
  res!: ResponsePayload;

  @Request<EntityOID>("path", "thread oid need un-resolve", "ls-thread-3")
  threadOID!: string;

}

const UnResolveComment = new UnResolveCommentMethod(
  METHOD.PUT,
  (threadOID) => `/api/v0/thread/${threadOID}/unresolve`,
);


export default UnResolveComment;
