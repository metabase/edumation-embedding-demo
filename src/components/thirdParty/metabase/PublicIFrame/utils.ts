import { IPublicIFrameStyleProps } from "./types";

export function getHashParams(
  styles: IPublicIFrameStyleProps = {},
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

  return queryParamsArr.length > 0 ? `#${queryParamsArr.join("&")}` : "";
}
