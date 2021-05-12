import { ApiMethod, METHOD } from "@localization-share/api/api";
import { EntityOID } from "@localization-share/entities/entity";


type RequestPayload = EntityOID[]
type ResponsePayload = void

const UpdateProjectGlossary = new ApiMethod<EntityOID, RequestPayload, ResponsePayload>(
  METHOD.PUT,
  (entityOID) => `/api/v0/project/${entityOID}/glossary`,
);

export default UpdateProjectGlossary;
