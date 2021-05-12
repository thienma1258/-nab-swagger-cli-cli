import { LCD_ENTITY_TYPE, LCDEntity } from "./entity";


export interface LCDComment extends LCDEntity {
  lcdEntityType: LCD_ENTITY_TYPE.COMMENT;
  name: string;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  parentCommentOID: string;
  threadOID: string;
  latestReplyOID: string;
  replyCount: number;
  replyOIDs: string[];
  payload: Object[];
}
