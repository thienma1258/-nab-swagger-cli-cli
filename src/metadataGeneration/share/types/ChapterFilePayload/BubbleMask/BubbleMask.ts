import { EntityOID } from "../../../entities/entity";
import { Rect } from "../../geometry/Rect";


export type BubbleMask = {
  id: EntityOID;
  url: string;
  frame: Rect;
}
