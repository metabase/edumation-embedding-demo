import { IUser } from "../types";

export interface IUseJWTLoginProps {
  appId?: string;
  user?: IUser;
  returnTo?: string;
  expiresIn?: string;
}

export interface IUseJWTLoginRes {
  jwt?: string;
  loading: boolean;
  url?: string;
  error?: string;
}
