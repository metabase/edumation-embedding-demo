import { IUser } from "../types";

export const DUMMY_USER: IUser = {
  id: 1000000,
  email: "dummy.user@metabase.com",
  first_name: "Dummy",
  last_name: "User",
  groups: ["Read Only"],
};

export const DEFAULT_EXPIRATION_SECONDS = 5 * 60; // 5 minutes
