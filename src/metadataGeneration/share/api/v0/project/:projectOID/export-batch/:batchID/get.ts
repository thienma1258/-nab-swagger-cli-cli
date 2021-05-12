import { ApiMethod, METHOD } from "@localization-share/api/api";
import { EntityOID } from "@localization-share/entities/entity";
import { ProjectExportBatch, ProjectExportBatchID } from "@localization-share/entities/Project/ProjectExportBatch";


type ChapterInfo = {
  oid: EntityOID;
  name: string;
}

type BatchInfo =
  Pick<ProjectExportBatch, "expiredAt" | "createdAt" | "createdBy"> &
  {
    chapterList: ChapterInfo[];
  }

interface RequestParams {
  projectOID: EntityOID;
  batchID: ProjectExportBatchID
}
type RequestPayload = void
type ResponsePayload = BatchInfo

const GetProjectExportBatch = new ApiMethod<RequestParams, RequestPayload, ResponsePayload>(
  METHOD.GET,
  ({ projectOID, batchID }) => `/api/v0/project/${projectOID}/export-batch/${batchID}`,
);


export default GetProjectExportBatch;
