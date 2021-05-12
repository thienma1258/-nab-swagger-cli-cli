import { EntityOID } from "../entity";
import { UserID } from "../User";


export type ProjectExportBatchID = string;

export interface ProjectExportBatch {
  id: number;
  batchID: ProjectExportBatchID;
  projectOID: EntityOID;
  chapterRevisionList: EntityOID[];
  expiredAt: string | null;
  createdAt: string;
  createdBy: UserID;
}
