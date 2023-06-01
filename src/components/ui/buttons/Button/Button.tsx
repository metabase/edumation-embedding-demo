import { ButtonProps } from "./types";
import styled from "styled-components";
import { variant, space, width } from "styled-system";
import { DisabledMixin, mediaMin } from "@constants/theme/utils";

const Button = styled.button<ButtonProps>`
  ${({ disabled }) => DisabledMixin(disabled)}
  align-items: flex-start;
  appearance: none;
  border: none;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  display: inline-flex;
  flex-direction: row;
  flex-wrap: nowrap;
  font-family: ${({ theme }) => theme.fonts.default};
  justify-content: center;
  outline: none;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: background-color ${({ theme }) => theme.animation.duration.mouse}
    linear;
  user-select: ${({ disabled }) => (disabled ? "none" : "auto")};
  vertical-align: bottom;

  &:hover,
  &:focus {
    cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
    text-decoration: none;
  }

  ${space};
  ${width};
  ${variant({
    scale: "buttons",
  })};

  & > .md {
    display: none;
  }

  ${mediaMin("md")`
    & > .default {
      display: none;
    }

    & > .md {
      display: inline;
    }
  `}
`;

Button.defaultProps = {
  disabled: false,
  variant: "primary",
};

export default Button;
