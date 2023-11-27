import { IIFramePostMessage, IIFrameStyleProps } from "../IFrame/types";
import { IAppProps } from "../types";
import {
  PUBLIC_IFRAME_STYLE_FONTS,
  PUBLIC_IFRAME_STYLE_THEMES,
} from "./constants";

export type ThemeType = (typeof PUBLIC_IFRAME_STYLE_THEMES)[number];
export type FontType = (typeof PUBLIC_IFRAME_STYLE_FONTS)[number];

export interface IPublicIFrameStyleProps {
  bordered?: boolean;
  titled?: boolean;
  theme?: ThemeType;
  font?: FontType;
  hide_download_button?: boolean;
}

export interface IPublicIFrameProps extends IAppProps, IIFramePostMessage {
  src: string;
  appStyles?: IPublicIFrameStyleProps;
  iFrameStyles?: IIFrameStyleProps;
}
