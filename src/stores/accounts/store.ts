import { create } from "zustand";
import { DEFAULT_ACCOUNT } from "./constants";
import { AccountsStore, IAccount } from "./types";

export const useAccountsStore = create<AccountsStore>(
  (setState): AccountsStore => ({
    account: DEFAULT_ACCOUNT,
    switchAccount(account: IAccount): IAccount {
      setState({ account });
      return account;
    },
  }),
);
