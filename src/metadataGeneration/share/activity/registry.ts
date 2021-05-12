import { ActivityChangeLog } from "@localization-share/entities/Activity";

import { ActivityEntityType, GetActivityLogTextElementsFn } from "./types";


const ACTIVITY_REGISTRY: Record<ActivityEntityType, Record<string, GetActivityLogTextElementsFn>> = {
  title: {},
  chapter: {},
  organization: {},
};

const getLogKey = (log: ActivityChangeLog) => (
  `${log.action}/${log.attribute}`
);

export const register = (
  entityType: ActivityEntityType,
  key: string,
  activityLogTextElementsGetter: GetActivityLogTextElementsFn,
) => {

  if (!ACTIVITY_REGISTRY[entityType][key]) {
    ACTIVITY_REGISTRY[entityType][key] = activityLogTextElementsGetter;
  }

};

export const getActivityLogElementsRenderer = (log: ActivityChangeLog) => {
  const key = getLogKey(log);

  const {
    oid,
  } = log;

  const [, entityType] = oid.split("-") as [string, ActivityEntityType];

  return ACTIVITY_REGISTRY[entityType] && ACTIVITY_REGISTRY[entityType][key];
};
