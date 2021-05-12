import { S3Image } from "../../types/S3Image";
import { Entity, EntityOID } from "../entity";


export interface Asset extends Entity {
  name: string;
  fileURL: S3Image;
  fileType: string;
  fileSize: number;
  previewImage: S3Image;
  tagList: EntityOID[];
}
