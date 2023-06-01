import { mediaMin } from "@constants/theme/utils";
import styled from "styled-components";
import { IIFrameContentProps, IIFrameStyleProps } from "./types";

export const IFrameWrapper = styled.section<IIFrameStyleProps>`
  /* background-color: ${({ theme }) => theme.colors.background.light}; */
  background-color: ${({ theme }) => theme.colors.white};
  ${({ fullHeight }) => (fullHeight ? `flex: 1 0 auto;` : "")}
  ${({ height }) => (height ? `height: ${height}px;` : "")}
  position: relative;
  vertical-align: bottom;
  width: 100%;

  ${mediaMin<IIFrameStyleProps>("md")`
    ${({ mdHeight }) => (mdHeight ? `height: ${mdHeight}px;` : "")};
  `}

  ${mediaMin<IIFrameStyleProps>("xl")`
    ${({ xlHeight }) => (xlHeight ? `height: ${xlHeight}px;` : "")};
    ${({ xlRatio }) =>
      xlRatio
        ? `
          height: 0;
          padding-bottom: ${100 / xlRatio}%;
          width: 100%;
        `
        : ""};
  `}
`;

export const IFrameContent = styled.div<IIFrameContentProps>`
  align-items: stretch;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 100%;
  justify-content: stretch;
  left: ${({ horPadding }) => horPadding || 0}px;
  position: absolute;
  right: ${({ horPadding }) => horPadding || 0}px;
  top: 0;
  width: auto;
`;

export const IFrameTag = styled.iframe`
  border: none;
  flex: 1 0 auto;
  /* height: 100%; */
  /* left: 0; */
  /* position: absolute; */
  position: relative;
  /* top: 0; */
  vertical-align: bottom;
  width: 100%;
`;
