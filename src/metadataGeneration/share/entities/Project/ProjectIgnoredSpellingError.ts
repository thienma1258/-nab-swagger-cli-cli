import { EntityOID } from "../entity";
import { UserID } from "../User";


export type ProjectIgnoredSpellingErrorID = number;

export interface ProjectIgnoredSpellingError {
  id: ProjectIgnoredSpellingErrorID;
  projectOID: EntityOID
  word: string;
  errorType: string;
  createdAt: Date;
  createdBy: UserID
}
