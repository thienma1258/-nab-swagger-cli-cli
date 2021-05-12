import { ApiMethod, METHOD } from "@localization-share/api/api";
import { EntityOID } from "@localization-share/entities/entity";
import { ProjectExportBatch } from "@localization-share/entities/Project/ProjectExportBatch";


type RequestPayload = void
type ResponsePayload = ProjectExportBatch[]

const GetProjectExportBatches = new ApiMethod<EntityOID, RequestPayload, ResponsePayload>(
  METHOD.GET,
  (projectOID) => `/api/v0/project/${projectOID}/export-batch`,
);


export default GetProjectExportBatches;
