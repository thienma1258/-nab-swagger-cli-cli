import { LCD_ENTITY_TYPE, LCDEntity } from "./entity";


export interface LCDAsset extends LCDEntity {
  lcdEntityType: LCD_ENTITY_TYPE.ASSET;
  name: string;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  fileSize: number;
  fileURL: string;
  fileType: string;
  previewImageURL: string;
  tagOIDs: string[];
}
