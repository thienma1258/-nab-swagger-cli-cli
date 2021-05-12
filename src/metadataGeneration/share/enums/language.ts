import { getAvailableEnumDict } from "../utils/getAvailableEnumDic";


export enum LANGUAGE {
  ENGLISH= "en",
  JAPANESE= "ja",
  KOREAN= "ko",
  VIETNAMESE= "vi",
  CHINESE_SIMPLIFIED= "zh-Hans",
  CHINESE_TRADITIONAL= "zh-Hant",
  NO_LANGUAGE= "no-language-code",
}
export const LANGUAGE_LIST = Object.values(LANGUAGE);
export const AVAILABLE_LANGUAGE_DICT = getAvailableEnumDict(LANGUAGE);
