import { ApiMethod, METHOD } from "@localization-share/api/api";
import { Comment } from "@localization-share/entities/Comment";
import { EntityOID } from "@localization-share/entities/entity";
import { MethodDescription, Request, Response, Route, Security, Tags } from "nab-swagger-cli/dist/customDecorations";


type RequestParams = {
  threadOID: EntityOID;
  commentOID: EntityOID;
}

type UpdateCommentInput = Pick<Comment, "payload" >
type UpdateCommentResponse = void

@Route("Comment")
@Tags("Comment")
@Security("BearerJWT")
@MethodDescription("Update comment by CommentOID")
export class UpdateCommentMethod extends ApiMethod<RequestParams, UpdateCommentInput, UpdateCommentResponse> {


  @Response<UpdateCommentResponse>("200", "Ok update success")
  res!: UpdateCommentResponse;

  @Request<EntityOID>("path", "thread oid", "ls-thread-3")
  threadOID!: string;


  @Request<EntityOID>("path", "thread oid", "ls-thread-3")
  commentOID!: string;

}


const UpdateComment = new UpdateCommentMethod(
  METHOD.PUT,
  ({ threadOID, commentOID }) => `/api/v0/thread/${threadOID}/comment/${commentOID}`,
);


export default UpdateComment;
