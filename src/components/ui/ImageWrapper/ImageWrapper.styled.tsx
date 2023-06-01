import styled from "styled-components";

export const TheImageWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border: ${({ theme }) => theme.ui.border.width.small} solid
    ${({ theme }) => theme.colors.border.medium};
  border-radius: ${({ theme }) => theme.ui.border.radius.large};
  color: ${({ theme }) => theme.buttons.primary.backgroundColor};
  font-size: 0.825em;
  margin: 1em 0;
  overflow: hidden;
  padding: 0;
  vertical-align: bottom;
  width: 100%;

  img {
    vertical-align: bottom;
    width: 100%;
  }
`;
