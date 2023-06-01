import { isLocalhost, isSafari } from "@utils/browser";
import { ReactElement, useEffect, useState } from "react";
import { format } from "url";
import IFrame from "../IFrame";
import JWTContext from "../JWTContext";
import { getAppUrl } from "../utils";
import { JWTIFrameWrapper } from "./JWTIFrame.styled";
import { IJWTIFrameProps } from "./types";
import { getQueryParams } from "./utils";

export default function JWTIFrame({
  appId,
  returnTo = "",
  appStyles = {},
  iFrameStyles = {},
  location,
  frame,
  postMessageData,
}: IJWTIFrameProps): ReactElement {
  const { horPadding, height, mdHeight, xlHeight, xlRatio, fullHeight } =
    iFrameStyles;

  const [urlIsLocalhost, setUrlIsLocalhost] = useState<boolean>();
  const [browserIsSafari, setBrowserIsSafari] = useState<boolean>();
  useEffect(() => {
    setUrlIsLocalhost(isLocalhost());
    setBrowserIsSafari(isSafari());
  }, []);

  if (
    typeof urlIsLocalhost !== "boolean" ||
    typeof browserIsSafari !== "boolean"
  ) {
    return <></>;
  }

  if (urlIsLocalhost && browserIsSafari) {
    return (
      <JWTIFrameWrapper
        horPadding={horPadding}
        height={height}
        mdHeight={mdHeight}
        xlHeight={xlHeight}
        xlRatio={xlRatio}
        fullHeight={fullHeight}
      >
        <p>⚠️ Embedding is not supported in Safari and iOS on localhost.</p>
      </JWTIFrameWrapper>
    );
  }

  const queryParams = getQueryParams(appStyles);
  const appUrl = getAppUrl(appId);

  return (
    <JWTContext.Consumer>
      {({ jwt }) => (
        <IFrame
          src={format({
            pathname: `${appUrl}/auth/sso`,
            query: {
              jwt,
              return_to: `${
                returnTo.includes("http") ? "" : appUrl
              }${returnTo}${queryParams}`,
            },
          })}
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
      )}
    </JWTContext.Consumer>
  );
}
