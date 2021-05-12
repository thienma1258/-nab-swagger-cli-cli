import { Entity } from "../entity";


export interface TextPresetPayload {
  font?: string;
  fontSize?: number;
  fontStyle?: string;
  fontWeight?: string;
  lineHeight?: number;
  color?: string;
  alignment?: string;
}


export interface TextPreset extends Entity {
  name: string;
  description: string | null;
  payload: TextPresetPayload;
}
