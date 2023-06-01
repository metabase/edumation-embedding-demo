export interface IAppProps {
  appId?: string;
}

export interface IUser {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  groups: string[];
}
