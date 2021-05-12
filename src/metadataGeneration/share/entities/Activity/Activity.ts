import { ActivityLogParams } from "../../types/Activity";


export interface ActivityChangeLog {
  logId: number;
  oid: string;
  attribute: string;
  action: string;
  logParams: ActivityLogParams;
  preActionJson: ActivityLogParams;
  postActionJson: ActivityLogParams;
  createdAt: Date;
  userOid: string;
}
