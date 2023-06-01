export interface IIFramePostMessageFrame {
  metabase: {
    type: "frame";
    frame:
      | {
          mode: "normal";
        }
      | {
          mode: "fit";
          height: number;
        };
  };
}

export interface IIFramePostMessageLocation {
  metabase: {
    type: "location";
    location:
      | string
      | {
          pathname?: string;
          search?: string;
          query?: Record<string, any>;
          hash?: string;
          state?: any;
        };
  };
}

export type IFramePostMessageDataType =
  | IIFramePostMessageFrame
  | IIFramePostMessageLocation;

export interface IIFrameContentProps {
  horPadding?: number;
}

export interface IIFrameStyleProps extends IIFrameContentProps {
  height?: number;
  mdHeight?: number;
  xlHeight?: number;
  xlRatio?: number;
  fullHeight?: boolean;
}

export interface IIFramePostMessage {
  location?: IIFramePostMessageLocation;
  frame?: IIFramePostMessageFrame;
  postMessageData?: IFramePostMessageDataType;
}

export interface IIFrameProps extends IIFrameStyleProps, IIFramePostMessage {
  src: string;
}
