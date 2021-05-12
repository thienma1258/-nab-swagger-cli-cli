import { EntityOID } from "@localization-share/entities/entity";

import { CoreObject } from "../CoreObject";


// @ts-ignore Intended typing for "type"
export interface VisualAssetObject extends CoreObject {

  type: "visual-asset";

  visualAssetOID: EntityOID;
  constraintProportions: boolean;

}
