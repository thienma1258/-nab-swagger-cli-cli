import { ApiMethod, METHOD } from "@localization-share/api/api";
import { EntityOID } from "@localization-share/entities/entity";
import { MethodDescription, Request, Response, Route, Security, Tags } from "nab-swagger-cli/dist/customDecorations";


type RequestParams = {
  threadOID: EntityOID;
  commentOID: EntityOID;
}


type RequestPayload = void

@Route("Comment")
@Tags("Comment")
@Security("BearerJWT")
@MethodDescription("Delete comment by CommentOID")
export class DeleteCommentMethod extends ApiMethod<RequestParams, RequestPayload, void> {


  @Response<void>("200", "Ok delete success")
  res!: void;

  @Request<EntityOID>("path", "thread oid", "ls-thread-3")
  threadOID!: string;


  @Request<EntityOID>("path", "thread oid", "ls-thread-3")
  commentOID!: string;

}

const DeleteComment = new DeleteCommentMethod(
  METHOD.DELETE,
  ({ threadOID, commentOID }) => `/api/v0/thread/${threadOID}/comment/${commentOID}`,
);


export default DeleteComment;
