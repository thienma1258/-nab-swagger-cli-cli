import { ApiMethod, METHOD } from "@localization-share/api/api";
import { EntityOID } from "@localization-share/entities/entity";
import { ProjectIgnoredSpellingError } from "@localization-share/entities/Project";


type RequestPayload = void
type ResponsePayload = ProjectIgnoredSpellingError[]

const GetProjectIgnoredSpellingErrors = new ApiMethod<EntityOID, RequestPayload, ResponsePayload>(
  METHOD.GET,
  (projectOID) => `/api/v0/project/${projectOID}/ignored-spelling-error`,
);


export default GetProjectIgnoredSpellingErrors;
