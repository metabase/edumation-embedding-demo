export function isLocalhost(location?: Location): boolean {
  return typeof window !== "undefined"
    ? (location || window.location).hostname === "localhost"
    : false;
}

export function isSafari(userAgent?: string): boolean {
  return typeof window !== "undefined"
    ? /^((?!chrome|android).)*safari/i.test(userAgent || navigator.userAgent)
    : false;
}
