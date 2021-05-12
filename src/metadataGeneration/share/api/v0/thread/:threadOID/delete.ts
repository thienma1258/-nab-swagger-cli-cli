import { ApiMethod, METHOD } from "@localization-share/api/api";
import { EntityOID } from "@localization-share/entities/entity";
import { MethodDescription, Request, Response, Route, Security, Tags } from "nab-swagger-cli/dist/customDecorations";


type RequestPayload = void
type ResponsePayload = void


@Route("Thread")
@Tags("Thread")
@Security("BearerJWT")
@MethodDescription("Delete thread by oid")
export class DeleteThreadMethod extends ApiMethod<EntityOID, RequestPayload, ResponsePayload> {

  @Response<void>("200", "Ok delete success")
  res!: ResponsePayload;

  @Request<EntityOID>("path", "thread oid need delete", "ls-thread-3")
  threadOID!: string;

}

const DeleteThread = new DeleteThreadMethod(
  METHOD.POST,
  (threadOID) => `/api/v0/thread/${threadOID}`,
);

export default DeleteThread;
