import { IIFrameProps } from "./types";
import { createRef, ReactElement, useEffect, useCallback } from "react";
import { IFrameContent, IFrameTag, IFrameWrapper } from "./IFrame.styled";

export default function IFrame({
  src,
  location,
  frame,
  postMessageData,
  horPadding,
  height,
  mdHeight,
  xlHeight,
  xlRatio,
  fullHeight,
}: IIFrameProps): ReactElement {
  const iFrameRef = createRef<HTMLIFrameElement>();

  const postMessage = useCallback(
    (data) => {
      if (iFrameRef.current?.contentWindow && data) {
        iFrameRef.current.contentWindow.postMessage(data, "*");
      }
    },
    [iFrameRef],
  );

  useEffect(() => {
    postMessage(location);
  }, [iFrameRef, postMessage, location]);

  useEffect(() => {
    postMessage(frame);
  }, [iFrameRef, postMessage, frame]);

  useEffect(() => {
    postMessage(postMessageData);
  }, [iFrameRef, postMessage, postMessageData]);

  return (
    <IFrameWrapper
      height={height}
      mdHeight={mdHeight}
      xlHeight={xlHeight}
      xlRatio={xlRatio}
      fullHeight={fullHeight}
    >
      <IFrameContent horPadding={horPadding}>
        <IFrameTag
          ref={iFrameRef}
          src={src}
          frameBorder={0}
          onError={(err) => console.error(err)}
        />
      </IFrameContent>
    </IFrameWrapper>
  );
}
