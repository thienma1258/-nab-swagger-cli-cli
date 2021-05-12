import { Entity, EntityOID } from "../entity";


export interface ChapterRevision extends Entity {
  chapterOID: EntityOID;
  message: string;
  chapterFileRevisionOIDs: EntityOID[];
  revisionVersion: number;
}
