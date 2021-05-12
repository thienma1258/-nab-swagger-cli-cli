import { ActivityChangeLog } from "@localization-share/entities/Activity";
import { UserMetaInfo } from "@localization-share/types/MetaInfo";

import { getActivityLogElementsRenderer } from "./registry";
import { ACTIVITY_ELEMENT_TYPE, ActivityLogTextElement, ActivityObjectMetaInfos } from "./types";


export function convertToUserOid(userID: string) {
  if (userID.startsWith("auth0-user-")) return userID;
  return `auth0-user-${userID}`;
}

export const getActivityLogElements = (
  (log: ActivityChangeLog, objMeta: ActivityObjectMetaInfos): ActivityLogTextElement[] | null => {
    const renderer = getActivityLogElementsRenderer(log);
    return renderer ? renderer(log, objMeta) : null;
  }
);

export const getUserElement = (log: ActivityChangeLog, objMeta: ActivityObjectMetaInfos) => {
  const userOID = (
    log.userOid.startsWith("auth0-user-") ?
      log.userOid :
      convertToUserOid(log.userOid)
  );

  return {
    type: ACTIVITY_ELEMENT_TYPE.BOLD_TEXT,
    value: objMeta[userOID]?.name || userOID,
    avatarURL: (objMeta[userOID] as UserMetaInfo)?.avatarURL,
  };
};

export const getChapterElement = (log: ActivityChangeLog, objMeta: ActivityObjectMetaInfos) => {
  const chapterName = log.logParams.chapter.text;
  const chapterOID = log.logParams.chapter.oid || "";

  if (chapterName) {
    return {
      type: ACTIVITY_ELEMENT_TYPE.ENTITY_NAME,
      value: chapterName,
      oid: chapterOID,
    };
  }

  return {
    type: ACTIVITY_ELEMENT_TYPE.ENTITY_NAME,
    value: objMeta[chapterOID]?.name || chapterOID,
    oid: chapterOID,
  };
};

export const getTextElement = (text: string) => ({
  type: ACTIVITY_ELEMENT_TYPE.TEXT,
  value: text,
});

export const getBoldTextElement = (text: string) => ({
  type: ACTIVITY_ELEMENT_TYPE.BOLD_TEXT,
  value: text,
});

// export const injectAllRenderersToActivityRegistry = () => {};
