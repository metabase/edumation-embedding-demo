import { ReactElement, PropsWithChildren } from "react";
import { useJWTLogin } from "../hooks";
import JWTContext from "../JWTContext";
import { IJWTProviderProps } from "./types";

export default function JWTProvider({
  appId,
  user,
  expiresInSeconds,
  children,
}: PropsWithChildren<IJWTProviderProps>): ReactElement {
  const { jwt, loading, error } = useJWTLogin({
    appId,
    user,
    expiresInSeconds,
  });

  if (loading) {
    return <></>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!jwt) {
    return <></>;
  }

  return <JWTContext.Provider value={{ jwt }}>{children}</JWTContext.Provider>;
}
