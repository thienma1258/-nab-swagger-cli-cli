import { ChapterFilePayload } from "@localization-share/types/ChapterFilePayload/ChapterFilePayload";
import { S3Image } from "@localization-share/types/S3Image";
import { Stats } from "@localization-share/types/Stats";

import { Entity, EntityOID } from "../entity";


export interface ChapterFileRevision extends Entity {
  chapterFileOID: EntityOID;
  name: string;
  stats: Stats;
  payload: ChapterFilePayload;
  previewImage: S3Image;
  translateImage: S3Image;
  typesetImage: S3Image;
  exportImage: S3Image | null;
}
