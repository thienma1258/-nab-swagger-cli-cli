import { ApiMethod, METHOD } from "@localization-share/api/api";
import { ChapterRevision } from "@localization-share/entities/ChapterRevision";
import { EntityOID } from "@localization-share/entities/entity";


type RequestPayload = void
type ResponsePayload = Omit<ChapterRevision, "chapterOID" | "updatedAt" | "entityType">[]

const GetChapterRevisions = new ApiMethod<EntityOID, RequestPayload, ResponsePayload>(
  METHOD.GET,
  (chapterOID) => `/api/v0/chapter/${chapterOID}/revision`,
);

export default GetChapterRevisions;
