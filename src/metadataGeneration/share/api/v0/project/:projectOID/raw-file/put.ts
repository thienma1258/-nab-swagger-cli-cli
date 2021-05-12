import { ApiMethod, METHOD } from "@localization-share/api/api";
import { EntityOID } from "@localization-share/entities/entity";
import { ProjectRawFile } from "@localization-share/types/ProjectRawFile";


export type ProjectRawFileItem = Omit<ProjectRawFile, "lastModified"> & {
  lastModified?: string;
}
type RequestPayload = {
  prefix: string;
}
type ResponsePayload = {
  files: ProjectRawFileItem[];
  currentPrefix: string;
}

const GetProjectRawFiles = new ApiMethod<EntityOID, RequestPayload, ResponsePayload>(
  METHOD.PUT,
  (entityOID) => `/api/v0/project/${entityOID}/raw-file`,
);


export default GetProjectRawFiles;
