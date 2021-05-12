import { ApiMethod, METHOD } from "@localization-share/api/api";
import { EntityOID } from "@localization-share/entities/entity";
import { RoleID } from "@localization-share/entities/Role";
import { UserID } from "@localization-share/entities/User";


type RequestPayload = void
type ResponsePayload = Record<UserID, RoleID[]>

const GetProjectCollaborators = new ApiMethod<EntityOID, RequestPayload, ResponsePayload>(
  METHOD.GET,
  (entityOID) => `/api/v0/project/${entityOID}/user`,
);

export default GetProjectCollaborators;
