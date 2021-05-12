import { ENTITY_TYPE } from "@localization-share/entities/entity";
import { Role } from "@localization-share/entities/Role";
import { Language } from "@localization-share/types/Language";


export interface LocalizationSystemRoles {
  [ENTITY_TYPE.LOCALIZATION_SYSTEM]: Role[];
  [ENTITY_TYPE.PROJECT]: Role[];
  [ENTITY_TYPE.ORGANIZATION]: Role[];
}

export interface GlobalSetting {
  localizationSystemRoles: LocalizationSystemRoles;
  languages: Language[]
}
