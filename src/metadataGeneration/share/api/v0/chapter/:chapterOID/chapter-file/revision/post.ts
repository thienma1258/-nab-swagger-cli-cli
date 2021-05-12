import { ApiMethod, METHOD } from "@localization-share/api/api";
import { ChapterFileRevision } from "@localization-share/entities/ChapterFileRevision";
import { EntityOID } from "@localization-share/entities/entity";


type NewChapterFileRevision =
  Pick<ChapterFileRevision, "name" | "stats" | "payload" | "translateImage" | "typesetImage" | "previewImage"| "exportImage"> &
  //  chapterFileOID is to link with existed chapterFile, without this property given, server will create a new chapterFile for this revision
  Partial<Pick<ChapterFileRevision, "chapterFileOID">>

type RequestPayload = NewChapterFileRevision[]

type ChapterFileRevisionOID = EntityOID;
type ResponsePayload = ChapterFileRevisionOID[]

const CreateChapterFileRevision = new ApiMethod<EntityOID, RequestPayload, ResponsePayload>(
  METHOD.POST,
  (chapterOID) => `/api/v0/chapter/${chapterOID}/chapter-file/revision`,
);

export default CreateChapterFileRevision;
