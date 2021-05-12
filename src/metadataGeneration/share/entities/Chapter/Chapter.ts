import { CHAPTER_STATUS } from "@localization-share/enums/chapter";
import { Stats } from "@localization-share/types/Stats";

import { Entity, EntityOID } from "../entity";


export interface ChapterSetting {
  defaultTextStyle?: {
    lineSpacing?: number,
    font?: {
      family?: string
      style?: string
      variant?: string
      size?: number
      weight?: number
    },
    color?: string,
  }
}


export interface Chapter extends Entity {
  name: string;
  order: number;
  status: CHAPTER_STATUS;
  stats: Stats;
  fileList: EntityOID[];
  projectOID: EntityOID;
  timesExported: number;
  latestRevision: EntityOID;
  revisionList: EntityOID[];
  setting: ChapterSetting;
}
