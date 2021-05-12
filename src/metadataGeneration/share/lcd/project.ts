import { LANGUAGE } from "../enums/language";
import { READING_DIRECTION } from "../enums/readingDirection";
import { READING_STYLE } from "../enums/readingStyle";
import { LCD_ENTITY_TYPE, LCDEntity } from "./entity";


export interface LCDProject extends LCDEntity {
  lcdEntityType: LCD_ENTITY_TYPE.PROJECT;
  name: string;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  note: string;
  thumbnailURL: string;
  sourceLanguage: LANGUAGE;
  targetLanguage: LANGUAGE;
  readingStyle: READING_STYLE;
  readingDirection: READING_DIRECTION;
  glossaryOIDs: string[];
  chapterCount: number;
  collaboratorOIDs: string[];
  ignoredSpellingErrors: {
    id: number;
    word: string;
    errorType: string;
    createdAt: string;
    createdBy: string;
  }[];
  defaultTextPresetOID: string;
  textPresetOIDs: string[];
}
