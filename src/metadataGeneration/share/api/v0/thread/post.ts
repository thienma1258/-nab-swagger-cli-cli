import { ApiMethod, METHOD } from "@localization-share/api/api";
import { Thread } from "@localization-share/entities/Thread";
import { MethodDescription, Request, Response, Route, Security, Tags } from "nab-swagger-cli/dist/customDecorations";


type RequestPayload = Pick<Thread, "entityOID" | "position">
type ResponsePayload = string

@Route("Thread")
@Tags("Thread")
@Security("BearerJWT")
@MethodDescription("Create new thread")
export class CreateThreadMethod extends ApiMethod<void, RequestPayload, ResponsePayload> {

  @Request<RequestPayload>("body", "Request payload create new thread", {
    entityOID: "ls-project-1",
    position: {
      x: 1,
      y: 3,
    },
  })
  body!: RequestPayload;

  @Response<ResponsePayload>("200", "OID of new created thread", "ls-thread-3")
  res?: ResponsePayload;

}

const CreateThread = new ApiMethod<void, RequestPayload, ResponsePayload>(
  METHOD.POST,
  "/api/v0/thread",
);


export default CreateThread;
