import { ApiMethod, METHOD } from "@localization-share/api/api";
import { EntityOID } from "@localization-share/entities/entity";


type RequestPayload = EntityOID[]
type ResponsePayload = void

const DeleteProjects = new ApiMethod<void, RequestPayload, ResponsePayload>(
  METHOD.DELETE,
  "/api/v0/project/bulk-action/delete-project",
);


export default DeleteProjects;
