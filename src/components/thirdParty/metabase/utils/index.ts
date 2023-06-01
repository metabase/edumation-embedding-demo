export function getAppUrl(appId?: string): string {
  const metabaseAppId = appId || process.env.METABASE_APP_ID;
  const metabaseAppDomain = process.env.METABASE_APP_DOMAIN
    ? `.${process.env.METABASE_APP_DOMAIN}`
    : "";
  const metabaseAppPort = process.env.METABASE_APP_PORT
    ? `:${process.env.METABASE_APP_PORT}`
    : "";
  const metabaseAppProtocol = metabaseAppId === "localhost" ? "http" : "https";

  return `${metabaseAppProtocol}://${metabaseAppId}${metabaseAppDomain}${metabaseAppPort}`;
}
