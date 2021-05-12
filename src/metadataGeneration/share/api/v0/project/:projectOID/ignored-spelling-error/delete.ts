import { ApiMethod, METHOD } from "@localization-share/api/api";
import { EntityOID } from "@localization-share/entities/entity";
import { ProjectIgnoredSpellingErrorID } from "@localization-share/entities/Project";


type RequestPayload = ProjectIgnoredSpellingErrorID[]
type ResponsePayload = void

const DeleteProjectIgnoredSpellingErrors = new ApiMethod<EntityOID, RequestPayload, ResponsePayload>(
  METHOD.DELETE,
  (projectOID) => `/api/v0/project/${projectOID}/ignored-spelling-error`,
);


export default DeleteProjectIgnoredSpellingErrors;
