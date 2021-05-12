import { ApiMethod, METHOD } from "@localization-share/api/api";
import { EntityOID } from "@localization-share/entities/entity";


type ChapterOID = EntityOID

type RequestPayload = ChapterOID[]
type ResponsePayload = void

const ProjectBulkActionDeleteChapters = new ApiMethod<EntityOID, RequestPayload, ResponsePayload>(
  METHOD.DELETE,
  (projectOID) => `/api/v0/project/${projectOID}/chapter/bulk-delete`,
);

export default ProjectBulkActionDeleteChapters;
