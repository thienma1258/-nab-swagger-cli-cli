import { Payload } from "@localization-share/types/Payload";

import { Entity, EntityOID } from "../entity";


export interface Comment extends Entity {
  threadOID: EntityOID;
  parentCommentOID: EntityOID | null;
  replyCount: number;
  payload: Payload;
}
