import { useCallback, useEffect, useState } from "react";
import { IUseJWTLoginProps, IUseJWTLoginRes } from "./types";

export function useJWTLogin({
  appId = process.env.METABASE_APP_ID,
  user,
  returnTo = "/",
  expiresIn,
}: IUseJWTLoginProps = {}): IUseJWTLoginRes {
  const [requestDate, setRequestDate] = useState<Date>();
  const [jwt, setJWT] = useState<string>();
  const [loading, setLoading] = useState<boolean>(true);
  const [url, setUrl] = useState<string>();
  const [error, setError] = useState<string>();

  const getUrlAsync = useCallback(async () => {
    try {
      const response = await fetch("/api/auth/metabase", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          appId,
          user,
          returnTo,
          expiresIn, // Not used: see FIX
        }),
      });
      const data = await response.json();
      const { jwt, url } = data;
      setJWT(jwt);
      setUrl(url);
      setRequestDate(new Date());
      setLoading(false);
    } catch (err: any) {
      setError(err.message || err);
      console.error(err);
    }
  }, [appId, user, returnTo, expiresIn]);

  useEffect(() => {
    getUrlAsync();
  }, [getUrlAsync]);

  // FIX
  // Reload the token
  // as it expires after 3 minutes
  // on Metabase side
  if (requestDate) {
    const nowDate = new Date();
    const timeDiff = (nowDate.getTime() - requestDate.getTime()) / 1000 / 60; // in seconds
    // We are taking 3 minutes - 5 seconds
    if (timeDiff > 2.95 && !loading) {
      setLoading(true);
      getUrlAsync();
    }
  }
  //

  return { jwt, loading, url, error };
}
