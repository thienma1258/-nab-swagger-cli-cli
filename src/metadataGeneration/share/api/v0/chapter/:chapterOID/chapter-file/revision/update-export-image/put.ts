import { ApiMethod, METHOD } from "@localization-share/api/api";
import { ChapterFileRevision } from "@localization-share/entities/ChapterFileRevision";
import { EntityOID } from "@localization-share/entities/entity";


type UpdateChapterFileRevision = Pick<ChapterFileRevision, "exportImage"> & {
  chapterFileRevisionOID: EntityOID
}
type RequestPayload = UpdateChapterFileRevision[]

type ResponsePayload = void

const UpdateChapterFileRevisionExportImage = new ApiMethod<EntityOID, RequestPayload, ResponsePayload>(
  METHOD.PUT,
  (chapterOID) => `/api/v0/chapter/${chapterOID}/chapter-file/revision/update-export-image`,
);

export default UpdateChapterFileRevisionExportImage;
