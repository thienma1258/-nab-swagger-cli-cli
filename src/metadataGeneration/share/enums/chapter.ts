import { getAvailableEnumDict } from "../utils/getAvailableEnumDic";


export enum CHAPTER_STATUS {
  OPEN = "open",
  EDITING = "editing",
  TO_PROOFREAD = "to-proofread",
  PROOFREADING = "proofreading",
  DELIVERING = "delivering",
  DELIVERED = "delivered",
}
export const CHAPTER_STATUS_LIST = Object.values(CHAPTER_STATUS);
export const AVAILABLE_CHAPTER_STATUS_DICT = getAvailableEnumDict(CHAPTER_STATUS);
