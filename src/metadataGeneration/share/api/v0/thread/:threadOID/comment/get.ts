import { ApiMethod, METHOD } from "@localization-share/api/api";
import { EntityOID } from "@localization-share/entities/entity";
import { MethodDescription, Request, Response, Route, Security, Tags } from "nab-swagger-cli/dist/customDecorations";


type RequestPayload = void
type ResponsePayload = EntityOID[]

@Route("Comment")
@Tags("Comment")
@Security("BearerJWT")
@MethodDescription("Get comment by ThreadID")
export class GetCommentMethod extends ApiMethod<EntityOID, RequestPayload, ResponsePayload> {


  @Response<ResponsePayload>("200", "Ok return new commentID", ["ls-comment-1", "ls-comment-2"])
  res!: ResponsePayload;

  @Request<EntityOID>("path", "thread oid", "ls-thread-3")
  threadOID!: string;

}

const GetComment = new GetCommentMethod(
  METHOD.GET,
  (threadOID) => `/api/v0/thread/${threadOID}/comment`,
);


export default GetComment;
