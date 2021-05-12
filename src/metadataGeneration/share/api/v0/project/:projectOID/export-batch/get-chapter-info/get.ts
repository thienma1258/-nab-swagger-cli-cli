import { ApiMethod, METHOD } from "@localization-share/api/api";
import { Chapter } from "@localization-share/entities/Chapter";
import { ChapterFileRevision } from "@localization-share/entities/ChapterFileRevision";
import { ChapterRevision } from "@localization-share/entities/ChapterRevision";
import { EntityOID } from "@localization-share/entities/entity";


export type ChapterFileRevisionInfo = Pick<ChapterFileRevision, "oid" | "exportImage">

export type ChapterRevisionInfo =
  Pick<ChapterRevision, "oid"> &
  {
    chapterFileRevisions: ChapterFileRevisionInfo[];
  }

export type ChapterInfo =
  Pick<Chapter, "oid" | "name" | "stats" | "timesExported"> &
  {
    latestRevision?: ChapterRevisionInfo
  }


type RequestPayload = void
type ResponsePayload = ChapterInfo[]

const GetChapterInfoForProjectExportBatch = new ApiMethod<EntityOID, RequestPayload, ResponsePayload>(
  METHOD.GET,
  (projectOID) => `/api/v0/project/${projectOID}/export-batch/get-chapter-info`,
);


export default GetChapterInfoForProjectExportBatch;
