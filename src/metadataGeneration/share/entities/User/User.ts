import { Entity } from "../entity";
import { RoleID } from "../Role";


export type UserID = string;


export interface User extends Partial<Pick<Entity, "oid">> {
  userID: UserID;
  name?: string;
  avatarURL?: string;
  email?: string;
  emailVerified?: boolean;
  invitingExpired?: boolean;
  createdAt?: string;
  updatedAt?: string;
  globalRoles?: RoleID[];
  isLSUser?: boolean;
}


export interface UserIdentity {
  connection: string;
  userID: UserID;
  provider: string;
  isSocial: boolean;
  accessToken?: string;
  profileData?: {
    email?: string;
    emailVerified?: boolean;
    name?: string;
    phoneNumber?: string;
    phoneVerified?: boolean;
    requestLanguage?: string;
  };
}


export interface BaseMetadata {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}


export interface UserMetadata extends BaseMetadata {
  expiredAt?: string;
}
