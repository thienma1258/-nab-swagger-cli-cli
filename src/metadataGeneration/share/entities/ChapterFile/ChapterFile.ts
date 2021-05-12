import { Entity, EntityOID } from "../entity";


type ChapterFileRevisionOID = EntityOID
export interface ChapterFile extends Entity {
  chapterOID: EntityOID;
  chapterFileRevisionList: ChapterFileRevisionOID[];
}
