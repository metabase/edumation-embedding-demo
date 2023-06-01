import { IUser } from "@components/thirdParty/metabase/types";

export interface IAccount extends IUser {
  occupation: string;
  avatar: string;
  professor_id?: number;
}

export type AccountsStore = {
  account: IAccount;
  switchAccount(account: IAccount): IAccount;
};
