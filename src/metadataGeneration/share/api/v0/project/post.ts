import { ApiMethod, METHOD } from "@localization-share/api/api";
import { EntityOID } from "@localization-share/entities/entity";
import { Project } from "@localization-share/entities/Project";


type RequestPayload =
  Pick<Project, "name" | "readingStyle" | "sourceLanguage" | "targetLanguage" | "thumbnailURL" | "note" | "glossaryList" | "collaboratorRolesList" | "readingDirection" | "textPresetList" | "defaultTextPreset">
type ResponsePayload = EntityOID

const CreateProject = new ApiMethod<void, RequestPayload, ResponsePayload>(
  METHOD.POST,
  "/api/v0/project",
);


export default CreateProject;
