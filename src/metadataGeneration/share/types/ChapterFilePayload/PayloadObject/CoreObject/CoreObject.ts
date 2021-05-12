import { EntityOID } from "../../../../entities/entity";
import { Point } from "../../../geometry/Point";
import { Size } from "../../../geometry/Size";


export interface CoreObject {

  oid: EntityOID

  transform: {
    size: Size
    center: Point
    scale?: Point // default {1.0, 1.0}
    rotation?: number // in radians, default 0.0
  }

  type: undefined; // overridden by subclasses

  visible: boolean;

}
