import { UserId } from "aws-sdk/clients/appstream";


export enum ENTITY_TYPE {
  USER = "user",
  PROJECT = "project",
  CHAPTER = "chapter",
  CHAPTER_REVISION = "chapterRevision",
  CHAPTER_FILE = "cFile",
  CHAPTER_FILE_REVISION = "cFileRevision",
  ORGANIZATION = "organization",
  GLOSSARY = "glossary",
  GLOSSENTRY = "glossentry",
  THREAD = "thread",
  COMMENT = "comment",
  LOCALIZATION_SYSTEM = "inkrls",
  TAG = "tag",
  ASSET = "asset",
  TEXT_PRESET = "textPreset",
}
export const ENTITY_TYPES = Object.values(ENTITY_TYPE);

export type BaseEntityRelation = Record<string, never>;
export interface Entity {
  oid: EntityOID;
  entityType: ENTITY_TYPE;
  createdBy: UserId;
  updatedAt: string;
  createdAt: string;
}

export type EntityOID = string;
export type EntityID = number;
