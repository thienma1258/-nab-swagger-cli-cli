import { EntityOID } from "../../../../entities/entity";
import { Polygon } from "../../../geometry/Polygon";
import { CoreObject } from "../CoreObject/CoreObject";
import { StyledText } from "./StyledText/StyledText";


// @ts-ignore Intended typing for "type"
export interface TextObject extends CoreObject {

  type: "text";

  order: number;
  bubbleMaskID?: EntityOID;

  transcription?: {
    value?: string;
    box?: Polygon;
  };

  translation?: {
    value?: StyledText;
    importedValue?: string;
  };

}
