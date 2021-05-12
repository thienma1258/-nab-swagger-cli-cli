import { ApiMethod, METHOD } from "@localization-share/api/api";
import { Comment } from "@localization-share/entities/Comment";
import { EntityOID } from "@localization-share/entities/entity";
import { MethodDescription, Request, Response, Route, Security, Tags } from "nab-swagger-cli/dist/customDecorations";


type CreateCommentInput = Pick<Comment, "parentCommentOID" | "payload" >
type ResponsePayload = EntityOID

@Route("Comment")
@Tags("Comment")
@Security("BearerJWT")
@MethodDescription("Create Comment")
export class CreateCommentMethod extends ApiMethod<EntityOID, CreateCommentInput, ResponsePayload> {

  @Request<CreateCommentInput>("body", " payload create new comment", {
    parentCommentOID: "ls-comment-3",
    payload: {
      any: "any",
    },
  })
  body!: CreateCommentInput;

  @Response<ResponsePayload>("200", "Ok return new commentID", "ls-comment-1")
  res!: ResponsePayload;

  @Request<EntityOID>("path", "thread oid", "ls-thread-3")
  threadOID!: string;


}

const CreateComment = new CreateCommentMethod(
  METHOD.POST,
  (threadOID) => `/api/v0/thread/${threadOID}/comment`,
);


export default CreateComment;
