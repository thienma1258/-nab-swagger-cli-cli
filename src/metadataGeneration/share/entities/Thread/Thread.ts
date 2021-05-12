import { Point } from "@localization-share/types/geometry/Point";

import { Entity, EntityOID } from "../entity";


export interface Thread extends Entity {
  //  Which entity is this thread belong to
  entityOID: EntityOID;
  commentCount: number;
  isResolved: boolean;
  position: Point;
  commentOIDs: string[];
  key: string;
}
