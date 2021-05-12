export enum LCD_ENTITY_TYPE {
  CHAPTER="ls-chapter",
  USER="ls-user",
  ASSET="ls-asset",
  TAG="ls-tag",
  COMMENT="ls-comment",
  THREAD="ls-thread",
  GLOSSARY="ls-glossary",
  GLOSS_ENTRY="ls-glossentry",
  PROJECT="ls-project",
  CHAPTER_FILE="ls-cFile",
  TEXT_PRESET="ls-textPreset"
}
export interface LCDEntity {
  oid: string;
  lcdEntityType: LCD_ENTITY_TYPE,
}
