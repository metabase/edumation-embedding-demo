import { NAV_HEIGHT } from "@components/ui/nav/Nav/constants";
import styled from "styled-components";
import { IPageContainerProps } from "./types";

const PageContainer = styled.div<IPageContainerProps>`
  background-color: ${({ theme }) => theme.colors.background.light};
  margin: 0;
  padding: 0;
  position: relative;
  width: 100%;

  ${({ fullHeight }) =>
    fullHeight
      ? `
        align-items: flex-start;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        min-height: calc(100vh - ${NAV_HEIGHT}px);`
      : ""}
`;

export default PageContainer;
