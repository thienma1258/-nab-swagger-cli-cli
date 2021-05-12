import { ActivityChangeLog } from "@localization-share/entities/Activity";


export enum ACTIVITY_ELEMENT_TYPE {
  TEXT = "text",
  BOLD_TEXT = "bold-text",
  DATE = "date",
  ENTITY_NAME = "entity-name",
  FRAGMENT = "fragment",
}

export interface ActivityLogTextElement {
  type: ACTIVITY_ELEMENT_TYPE;
  value?: string;
  oid?: string;
  avatarURL?: string;
}

export type GetActivityLogTextElementsFn = (
  (log: ActivityChangeLog, objMeta: ActivityObjectMetaInfos) => ActivityLogTextElement[]
)

export type ActivityEntityType = string;

export type GenericObjectMetaInfos<S extends Record<string, unknown>> = Record<string, S>
export type ActivityObjectMetaInfos = GenericObjectMetaInfos<{ name: string; oid: string }>
