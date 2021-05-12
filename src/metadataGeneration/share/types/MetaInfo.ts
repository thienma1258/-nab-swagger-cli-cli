import { User } from "@localization-share/entities/User";


export type BaseMetaInfo = {
  oid: string;
  name: string | null;
};

export type UserMetaInfo = BaseMetaInfo & User;
