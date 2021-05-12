import { Size } from "../geometry/Size";
import { BubbleMask } from "./BubbleMask";
import { PayloadObject } from "./PayloadObject/PayloadObject";


export type ChapterFilePayload = {
  size: Size;
  objects?: PayloadObject[];
  bubbleMasks?: BubbleMask[];
}
