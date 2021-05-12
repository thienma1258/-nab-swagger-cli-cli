import { ApiMethod, METHOD } from "@localization-share/api/api";
import { ChapterFileRevision } from "@localization-share/entities/ChapterFileRevision";
import { EntityOID } from "@localization-share/entities/entity";


type ChapterFileRevisionOID = EntityOID
type RequestPayload = ChapterFileRevisionOID[]

type ResponsePayload = Omit<ChapterFileRevision, "updatedAt" | "entityType">[]

const GetChapterFileRevisions = new ApiMethod<EntityOID, RequestPayload, ResponsePayload>(
  METHOD.PUT,
  (chapterOID) => `/api/v0/chapter/${chapterOID}/chapter-file/revision`,
);

export default GetChapterFileRevisions;
