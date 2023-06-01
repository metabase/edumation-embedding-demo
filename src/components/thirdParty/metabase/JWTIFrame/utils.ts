import { JWTIFrameStylePropsType } from "./types";

export function getQueryParams(
  styles: JWTIFrameStylePropsType = {},
  filterProperties = false,
): string {
  const queryParamsArr = Object.keys(styles)
    .filter(
      (key) =>
        !(
          filterProperties &&
          (styles[key] === false ||
            styles[key] === undefined ||
            styles[key] === null)
        ),
    )
    .map((key) => `${key}=${styles[key] || false}`);

  return queryParamsArr.length > 0 ? `?${queryParamsArr.join("&")}` : "";
}
