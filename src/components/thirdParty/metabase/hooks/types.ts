import { IUser } from "../types";

export interface IUseJWTLoginProps {
  appId?: string;
  user?: IUser;
  returnTo?: string;
  expiresInSeconds?: number;
}

export interface IUseJWTLoginRes {
  jwt?: string;
  loading: boolean;
  url?: string;
  error?: string;
}
