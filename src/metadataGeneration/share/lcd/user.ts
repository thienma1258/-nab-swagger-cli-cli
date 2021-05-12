import { LCD_ENTITY_TYPE, LCDEntity } from "./entity";


export interface LCDUser extends LCDEntity {
  lcdEntityType: LCD_ENTITY_TYPE.USER;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  emailVerified: boolean;
  invitingExpired: boolean;
  avatarURL: string;
}
