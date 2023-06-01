import { DisabledMixin } from "@constants/theme/utils";
import styled from "styled-components";
import Button from "@components/ui/buttons/Button";
import { NAV_HEIGHT } from "@components/ui/nav/Nav/constants";

export const CloseButtonWrapper = styled(Button)`
  ${({ disabled }) => DisabledMixin(disabled)}
  background-color: transparent;
  border: none;
  border-radius: 0;
  box-shadow: none;
  display: inline-block;
  height: ${NAV_HEIGHT}px;
  margin: 0;
  opacity: 1;
  padding: 0;
  transition: opacity ${({ theme }) => theme.animation.duration.mouse};
  width: ${NAV_HEIGHT}px;

  &::before,
  &::after {
    content: none;
  }

  &:hover {
    background-color: transparent;
    opacity: ${({ theme }) => theme.opacity.disabled};
  }

  &:disabled {
    background-color: transparent;
  }
`;
