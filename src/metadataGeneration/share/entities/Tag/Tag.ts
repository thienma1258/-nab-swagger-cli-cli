import { Extra } from "../../types/Extra";
import { Entity } from "../entity";


export interface Tag extends Entity {
  name: string;
  extras: Extra[]
}
