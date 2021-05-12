import { ApiMethod, METHOD } from "@localization-share/api/api";
import { ChapterFile } from "@localization-share/entities/ChapterFile";
import { EntityOID } from "@localization-share/entities/entity";


type RequestPayload = void
type ResponsePayload = Omit<ChapterFile, "updatedAt" | "entityType" | "chapterOID">[]

const GetChapterFiles = new ApiMethod<EntityOID, RequestPayload, ResponsePayload>(
  METHOD.GET,
  (chapterOID) => `/api/v0/chapter/${chapterOID}/chapter-file`,
);

export default GetChapterFiles;
