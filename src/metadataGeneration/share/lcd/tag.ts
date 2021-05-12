import { LCD_ENTITY_TYPE, LCDEntity } from "./entity";


export interface LCDTag extends LCDEntity {
  lcdEntityType: LCD_ENTITY_TYPE.TAG;
  name: string;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  extras: Record<string, string>;
}
