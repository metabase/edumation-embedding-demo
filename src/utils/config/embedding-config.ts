import {
  FontType,
  IPublicIFrameStyleProps,
  ThemeType,
} from "@components/thirdParty/metabase/PublicIFrame/types";
import {
  PUBLIC_IFRAME_STYLE_FONTS,
  PUBLIC_IFRAME_STYLE_THEMES,
} from "@components/thirdParty/metabase/PublicIFrame/constants";
import type { ParsedUrlQuery } from "querystring";

export const getEmbeddingOptions = (
  query: ParsedUrlQuery = {},
): IPublicIFrameStyleProps => ({
  bordered: query.bordered ? true : false,
  titled: query.titled ? true : false,
  hide_download_button: query.hide_download_button ? true : false,
  theme:
    query.theme && PUBLIC_IFRAME_STYLE_THEMES.includes(query.theme as ThemeType)
      ? (query.theme as ThemeType)
      : undefined,
  font:
    query.font && PUBLIC_IFRAME_STYLE_FONTS.includes(query.font as FontType)
      ? (query.font as FontType)
      : undefined,
});
