import { TextPresetPayload } from "../entities/TextPreset/index";
import { LCDEntity } from "./entity";


export interface LCDTextPreset extends LCDEntity {
  name: string;
  description: string;
  payload: TextPresetPayload;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
}
