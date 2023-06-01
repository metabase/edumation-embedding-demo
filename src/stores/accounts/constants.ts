import { IAccount } from "./types";

export const ACCOUNTS: IAccount[] = [
  {
    id: 1000000,
    first_name: "Mary",
    last_name: "Smith",
    email: "mary.smith@metabase.com",
    occupation: "teacher",
    avatar: "/images/mary-smith.png",
    groups: ["Professors"],
    professor_id: 1,
  },
  {
    id: 999999,
    first_name: "Anna",
    last_name: "Johnson",
    email: "anna.johnson@metabase.com",
    occupation: "teacher",
    avatar: "/images/anna-johnson.png",
    groups: ["Professors"],
    professor_id: 2,
  },
];

export const DEFAULT_ACCOUNT = ACCOUNTS[0];
