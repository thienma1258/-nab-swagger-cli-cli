import { getAvailableEnumDict } from "../utils/getAvailableEnumDic";


export enum READING_STYLE {
  VERTICAL = "vs",
  PAGE_BY_PAGE = "pbp",
  COMICSTRIP = "comicstrip",
}
export const READING_STYLE_LIST = Object.values(READING_STYLE);
export const AVAILABLE_READING_STYLE_DICT = getAvailableEnumDict(READING_STYLE);
