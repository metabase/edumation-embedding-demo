import styled from "styled-components";
import { ILogoWrapper } from "./types";

export const LogoWrapper = styled.div<ILogoWrapper>`
  display: inline-block;
  position: relative;
  width: auto;
`;

export const LogoIcon = styled.svg`
  height: ${({ height }) => `${height}px`};
  min-height: ${({ height }) => `${height}px`};
  min-width: ${({ width }) => `${width}px`};
  width: ${({ width }) => `${width}px`};
`;
