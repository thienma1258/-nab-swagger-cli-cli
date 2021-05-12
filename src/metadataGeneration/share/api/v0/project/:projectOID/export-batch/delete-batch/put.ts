import { ApiMethod, METHOD } from "@localization-share/api/api";
import { EntityOID } from "@localization-share/entities/entity";
import { ProjectExportBatchID } from "@localization-share/entities/Project/ProjectExportBatch";


type RequestPayload = ProjectExportBatchID[]
type ResponsePayload = void

const DeleteProjectExportBatches = new ApiMethod<EntityOID, RequestPayload, ResponsePayload>(
  METHOD.PUT,
  (projectOID) => `/api/v0/project/${projectOID}/export-batch/delete-batch`,
);


export default DeleteProjectExportBatches;
