import { ReactElement } from "react";
import IFrame from "../IFrame";
import { getAppUrl } from "../utils";
import { IPublicIFrameProps } from "./types";
import { getHashParams } from "./utils";

export default function PublicIFrame(props: IPublicIFrameProps): ReactElement {
  const {
    appId,
    src,
    appStyles = {},
    iFrameStyles = {},
    location,
    frame,
    postMessageData,
  } = props;
  const { horPadding, height, mdHeight, xlHeight, xlRatio, fullHeight } =
    iFrameStyles;

  const hashParams = getHashParams(appStyles);
  const url =
    src.indexOf("http") > -1
      ? `${src}${hashParams}`
      : `${getAppUrl(appId)}/public${src}${hashParams}`;

  return (
    <IFrame
      src={url}
      location={location}
      frame={frame}
      postMessageData={postMessageData}
      horPadding={horPadding}
      height={height}
      mdHeight={mdHeight}
      xlHeight={xlHeight}
      xlRatio={xlRatio}
      fullHeight={fullHeight}
    />
  );
}
