import { ApiMethod, METHOD } from "@localization-share/api/api";
import { EntityOID } from "@localization-share/entities/entity";
import { MethodDescription, Request, Response, Route, Security, Tags } from "nab-swagger-cli/dist/customDecorations";


type RequestPayload = void
type ResponsePayload = void

@Route("Thread")
@Tags("Thread")
@Security("BearerJWT")
@MethodDescription("Resolve thread by oid")
export class ResolveCommentMethod extends ApiMethod<EntityOID, RequestPayload, ResponsePayload> {

  @Response<void>("200", "Ok resolve success")
  res!: ResponsePayload;

  @Request<EntityOID>("path", "thread oid need un-resolve", "ls-thread-3")
  threadOID!: string;

}

const ResolveComment = new ResolveCommentMethod(
  METHOD.PUT,
  (threadOID) => `/api/v0/thread/${threadOID}/resolve`,
);


export default ResolveComment;
