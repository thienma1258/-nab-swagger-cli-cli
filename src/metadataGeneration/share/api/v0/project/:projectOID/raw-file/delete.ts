import { ApiMethod, METHOD } from "@localization-share/api/api";
import { EntityOID } from "@localization-share/entities/entity";


type RequestPayload = string[]
type ResponsePayload = void

const DeleteProjectRawFiles = new ApiMethod<EntityOID, RequestPayload, ResponsePayload>(
  METHOD.DELETE,
  (entityOID) => `/api/v0/project/${entityOID}/raw-file`,
);


export default DeleteProjectRawFiles;
