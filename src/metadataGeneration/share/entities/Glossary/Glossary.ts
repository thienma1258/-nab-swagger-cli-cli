import { LANGUAGE } from "@localization-share/enums/language";

import { Entity } from "../entity";


export interface Glossary extends Entity {
  name: string;
  sourceLanguage: LANGUAGE;
  targetLanguage: LANGUAGE;
  glossentryCount: number;
}
