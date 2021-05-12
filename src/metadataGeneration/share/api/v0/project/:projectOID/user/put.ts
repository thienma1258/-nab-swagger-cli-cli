import { ApiMethod, METHOD } from "@localization-share/api/api";
import { EntityOID } from "@localization-share/entities/entity";
import { RoleID } from "@localization-share/entities/Role";
import { UserID } from "@localization-share/entities/User";


type RequestPayload = Record<UserID, RoleID[]>
type ResponsePayload = void

const UpdateProjectCollaborators = new ApiMethod<EntityOID, RequestPayload, ResponsePayload>(
  METHOD.PUT,
  (entityOID) => `/api/v0/project/${entityOID}/user`,
);

export default UpdateProjectCollaborators;
