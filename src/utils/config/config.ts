export function getEnv(short = false): string {
  // test
  if (process.env.ENV === "test") {
    return "test";
  }
  // staging
  else if (process.env.ENV === "staging") {
    return short ? "stgn" : "staging";
  }
  // development
  else if (process.env.ENV === "development") {
    return short ? "dev" : "development";
  }
  // production
  else if (process.env.NODE_ENV === "production") {
    return short ? "prod" : "production";
  }

  return process.env.NODE_ENV;
}

export function isDevelopment(): boolean {
  if (getEnv() === "development") {
    return true;
  }

  return false;
}

export function isTest(): boolean {
  if (getEnv() === "test") {
    return true;
  }

  return false;
}

export function isStaging(): boolean {
  if (getEnv() === "staging") {
    return true;
  }

  return false;
}

export function isProduction(): boolean {
  if (getEnv() === "production") {
    return true;
  }

  return false;
}
