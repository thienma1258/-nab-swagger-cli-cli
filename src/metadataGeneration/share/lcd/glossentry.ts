import { LCD_ENTITY_TYPE, LCDEntity } from "./entity";


export interface LCDGlossaryEntry extends LCDEntity {
  lcdEntityType: LCD_ENTITY_TYPE.GLOSS_ENTRY;
  name: string;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  aliasList: string[];
  value: string;
  glossaryOID: string;
}
