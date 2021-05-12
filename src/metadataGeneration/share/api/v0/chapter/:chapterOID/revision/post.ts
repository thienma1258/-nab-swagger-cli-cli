import { ApiMethod, METHOD } from "@localization-share/api/api";
import { ChapterRevision } from "@localization-share/entities/ChapterRevision";
import { EntityOID } from "@localization-share/entities/entity";


type RequestPayload = Partial<Pick<ChapterRevision, "message" | "chapterFileRevisionOIDs">>

type ChapterRevisionOID = EntityOID
type ResponsePayload = ChapterRevisionOID

const CreateChapterRevision = new ApiMethod<EntityOID, RequestPayload, ResponsePayload>(
  METHOD.POST,
  (chapterOID) => `/api/v0/chapter/${chapterOID}/revision`,
);

export default CreateChapterRevision;
