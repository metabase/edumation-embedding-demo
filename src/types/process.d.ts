declare namespace NodeJS {
  export interface ProcessEnv {
    ENV: string;

    METABASE_APP_ID: string;
    METABASE_APP_DOMAIN: string;
    METABASE_APP_PORT: string;

    METABASE_JWT_SHARED_SECRET: string;
  }
}
