import { READING_DIRECTION } from "../../enums/readingDirection";
import { READING_STYLE } from "../../enums/readingStyle";
import { Entity, EntityOID } from "../entity";
import { RoleID } from "../Role";
import { UserID } from "../User";


export type ProjectCollaboratorRole = {
  userID: UserID;
  roleIDs: RoleID[]
}


export interface Project extends Entity {
  name: string;
  readingStyle: READING_STYLE;
  readingDirection: READING_DIRECTION;
  //  Language is now returned from API, so we no more have enums for language
  sourceLanguage: string;
  targetLanguage: string;
  thumbnailURL: string | null;
  note: string | null;
  glossaryList?: EntityOID[];
  collaboratorList?: UserID[];
  collaboratorRolesList?: ProjectCollaboratorRole[];
  textPresetList?: EntityOID[];
  defaultTextPreset?: EntityOID | null;
}
