import { LCD_ENTITY_TYPE, LCDEntity } from "./entity";


export interface LCDThread extends LCDEntity {
  lcdEntityType: LCD_ENTITY_TYPE.THREAD;
  name: string;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  entityOID: string;
  latestCommentOID: string;
  commentCount: number;
  isResolved: boolean;
  key: string;
  position: { x: number; y: number };
  commentOIDs: string[];
}
