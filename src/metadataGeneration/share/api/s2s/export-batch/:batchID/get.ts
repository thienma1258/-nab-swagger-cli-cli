import { ApiMethod, METHOD } from "@localization-share/api/api";
import { EntityOID } from "@localization-share/entities/entity";
import { ProjectExportBatchID } from "@localization-share/entities/Project/ProjectExportBatch";
import { READING_DIRECTION } from "@localization-share/enums/readingDirection";
import { READING_STYLE } from "@localization-share/enums/readingStyle";
import { ChapterFilePayload } from "@localization-share/types/ChapterFilePayload";


export interface ChapterFileInfo {
  oid: EntityOID;
  name: string;
  exportImage: string;
  payload: Partial<ChapterFilePayload>
}

export interface ChapterInfo {
  oid: EntityOID;
  name: string;
  fileList: ChapterFileInfo[];
}

type RequestPayload = void
type ResponsePayload = {
  readingStyle?: READING_STYLE;
  readingDirection?: READING_DIRECTION;
  chapterInfos?: ChapterInfo[];
}

const GetBatchInfoByBatchID = new ApiMethod<ProjectExportBatchID, RequestPayload, ResponsePayload>(
  METHOD.GET,
  (batchID) => `/api/s2s/export-batch/${batchID}`,
);

export default GetBatchInfoByBatchID;
