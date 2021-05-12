import { ApiMethod, METHOD } from "@localization-share/api/api";
import { EntityOID } from "@localization-share/entities/entity";
import { Project } from "@localization-share/entities/Project";


type RequestPayload =
Partial<Pick<Project, "name" | "readingStyle" | "sourceLanguage" | "targetLanguage" | "thumbnailURL" | "note" | "glossaryList" | "collaboratorList" | "readingDirection" | "textPresetList" | "defaultTextPreset">>
type ResponsePayload = void

const UpdateProject = new ApiMethod<EntityOID, RequestPayload, ResponsePayload>(
  METHOD.PUT,
  (entityOID) => `/api/v0/project/${entityOID}`,
);


export default UpdateProject;
