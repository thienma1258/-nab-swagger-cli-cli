import { ApiMethod, METHOD } from "@localization-share/api/api";
import { EntityOID } from "@localization-share/entities/entity";


type ChapterOID = EntityOID
type ChapterRenameItem = {
  chapterOID: ChapterOID;
  name: string;
}

type RequestPayload = ChapterRenameItem[]
type ResponsePayload = void

const ProjectBulkActionRenameChapters = new ApiMethod<EntityOID, RequestPayload, ResponsePayload>(
  METHOD.PUT,
  (projectOID) => `/api/v0/project/${projectOID}/chapter/bulk-rename`,
);

export default ProjectBulkActionRenameChapters;
