export type ActivityID = number;

export type ActivityMeta = Record<string, string>;

export interface ActivityLogParam {
  oid?: string;
  text?: string;
  link?: string;
  meta?: ActivityMeta;
}

export interface ActivityActionParam extends ActivityLogParam {
  imageURL?: string;
  textList?: string[];
  //  This could be an list of any things
  list?: unknown[];
}

export type ActivityLogParams = Record<string, ActivityLogParam>;
export type ActivityActionParams = Record<string, ActivityActionParam>;

export enum LOG_LEVEL {
  INFO = 0,
  IMPORTANT = 1,
}

export interface Activity {
  logParams: ActivityLogParams;
  attribute: string;
  action: string;
  userOID: string;
  preActionJSON: ActivityActionParams;
  postActionJSON: ActivityActionParams;
  oid: string;
  logID: ActivityID;
  createdAt: Date;
  logLevel: LOG_LEVEL;
}


export interface FetchActivityRequest {
  limit?: number;
  lastLID?: number;
}

export interface FetchActivityResponse {
  total: number;
  havingMore: boolean;
  logList: Activity[];
}
