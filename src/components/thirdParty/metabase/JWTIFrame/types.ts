import { IIFramePostMessage, IIFrameStyleProps } from "../IFrame/types";
import { IAppProps } from "../types";
import { QUERY_PARAMETERS } from "./constants";

export type QueryParametersKeysType = (typeof QUERY_PARAMETERS)[number];
export type JWTIFrameStylePropsType = Optional<
  Record<QueryParametersKeysType, boolean>,
  QueryParametersKeysType
>;

export interface IJWTIFrameProps extends IAppProps, IIFramePostMessage {
  returnTo?: string;
  appStyles?: JWTIFrameStylePropsType;
  iFrameStyles?: IIFrameStyleProps;
}
