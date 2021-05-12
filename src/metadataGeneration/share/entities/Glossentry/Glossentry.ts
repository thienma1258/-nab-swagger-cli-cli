import { Entity, EntityOID } from "../entity";


export interface Glossentry extends Entity {
  glossaryOID: EntityOID;
  name: string;
  value: string;
  aliasList: string[];
}
