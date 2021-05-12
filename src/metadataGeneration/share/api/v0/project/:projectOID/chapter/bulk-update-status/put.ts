import { ApiMethod, METHOD } from "@localization-share/api/api";
import { EntityOID } from "@localization-share/entities/entity";
import { CHAPTER_STATUS } from "@localization-share/enums/chapter";


type ChapterOID = EntityOID
type ChapterRenameItem = {
  chapterOID: ChapterOID;
  status: CHAPTER_STATUS;
}

type RequestPayload = ChapterRenameItem[]
type ResponsePayload = void

const ProjectBulkActionUpdateStatus = new ApiMethod<EntityOID, RequestPayload, ResponsePayload>(
  METHOD.PUT,
  (projectOID) => `/api/v0/project/${projectOID}/chapter/bulk-update-status`,
);

export default ProjectBulkActionUpdateStatus;
