import { getAvailableEnumDict } from "../utils/getAvailableEnumDic";


export enum READING_DIRECTION {
  RTL = "rtl",
  LTR = "ltr",
}
export const READING_DIRECTION_LIST = Object.values(READING_DIRECTION);
export const AVAILABLE_READING_DIRECTION_DICT = getAvailableEnumDict(READING_DIRECTION);
