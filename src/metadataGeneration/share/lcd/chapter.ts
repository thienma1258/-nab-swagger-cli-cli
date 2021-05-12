import { CHAPTER_STATUS } from "@localization-share/enums/chapter";

import { Stats } from "../types/Stats";
import { LCD_ENTITY_TYPE, LCDEntity } from "./entity";


export interface LCDChapter extends LCDEntity {
  lcdEntityType: LCD_ENTITY_TYPE.CHAPTER;
  projectOID: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  order: number;
  stats: Stats;
  status: CHAPTER_STATUS;
  chapterfileOIDs: string[];
  commentCount: number;
  resolvedCommentCount: number;
}
