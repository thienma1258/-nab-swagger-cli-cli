import { ApiMethod, METHOD } from "@localization-share/api/api";
import { EntityOID } from "@localization-share/entities/entity";
import { ProjectExportBatch, ProjectExportBatchID } from "@localization-share/entities/Project/ProjectExportBatch";


type NewProjectExportBatch = Pick<ProjectExportBatch, "chapterRevisionList">

type RequestPayload = NewProjectExportBatch[]
type ResponsePayload = ProjectExportBatchID[]

const CreateProjectExportBatches = new ApiMethod<EntityOID, RequestPayload, ResponsePayload>(
  METHOD.POST,
  (projectOID) => `/api/v0/project/${projectOID}/export-batch`,
);

export default CreateProjectExportBatches;
