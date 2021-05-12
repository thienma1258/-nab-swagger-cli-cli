import { ApiMethod, METHOD } from "@localization-share/api/api";
import { EntityOID } from "@localization-share/entities/entity";
import { Point } from "@localization-share/types/geometry/Point";
import { MethodDescription, Request, Response, Route, Security, Tags } from "nab-swagger-cli/dist/customDecorations";


type RequestPayload = Point

type ResponsePayload = void

@Route("Thread")
@Tags("Thread")
@Security("BearerJWT")
@MethodDescription("Update position of thread")
export class UpdateThreadPositionMethod extends ApiMethod<EntityOID, RequestPayload, ResponsePayload> {

  @Response<void>("200", "Ok update success")
  res!: ResponsePayload;

  @Request<RequestPayload>("body", "Position need to be update", {
    x: 1.2,
    y: 1.5,
  })
  body!: RequestPayload;

  @Request<EntityOID>("path", "thread oid", "ls-thread-3")
  threadOID!: string;

}


const UpdateThreadPosition = new UpdateThreadPositionMethod(
  METHOD.PUT,
  (threadOID) => `/api/v0/thread/${threadOID}/position`,
);


export default UpdateThreadPosition;
