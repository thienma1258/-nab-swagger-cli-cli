import { ApiMethod, METHOD } from "@localization-share/api/api";
import { EntityOID } from "@localization-share/entities/entity";
import { ProjectIgnoredSpellingError, ProjectIgnoredSpellingErrorID } from "@localization-share/entities/Project";


type CreateProjectIgnoredSpellingError = Pick<ProjectIgnoredSpellingError, "word" | "errorType">
type RequestPayload = CreateProjectIgnoredSpellingError[]
type ResponsePayload = ProjectIgnoredSpellingErrorID[]

const CreateProjectIgnoredSpellingErrors = new ApiMethod<EntityOID, RequestPayload, ResponsePayload>(
  METHOD.POST,
  (projectOID) => `/api/v0/project/${projectOID}/ignored-spelling-error`,
);


export default CreateProjectIgnoredSpellingErrors;
