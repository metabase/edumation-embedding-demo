import { IUser } from "../types";

export interface IJWTProviderProps {
  appId?: string;
  user?: IUser;
  expiresIn?: string;
}
