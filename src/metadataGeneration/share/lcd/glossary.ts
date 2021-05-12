import { LANGUAGE } from "../enums/language";
import { LCD_ENTITY_TYPE, LCDEntity } from "./entity";


export interface LCDGlossary extends LCDEntity {
  lcdEntityType: LCD_ENTITY_TYPE.GLOSSARY;
  name: string;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  sourceLanguage: LANGUAGE;
  targetLanguage: LANGUAGE;
  glossentryCount: number;
}
