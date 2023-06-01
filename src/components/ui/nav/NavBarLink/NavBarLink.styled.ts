import { mediaMin } from "@constants/theme/utils";
import styled from "styled-components";
import { NAV_HEIGHT, NAV_PADDING } from "@components/ui/nav/Nav/constants";
import { NAV_LINK_PADDING } from "./constants";
import Link from "next/link";

export const NavBarLinkContent = styled.span`
  background-color: transparent;
  border-radius: ${NAV_LINK_PADDING}px;
  padding: ${NAV_LINK_PADDING / 2}px ${NAV_LINK_PADDING}px;
  transition: background-color ${({ theme }) => theme.animation.duration.mouse};
`;

export const NavBarLinkWrapper = styled(Link)`
  appearance: none;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.text.secondary};
  cursor: pointer;
  display: inline-block;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  padding: ${2 * NAV_LINK_PADDING}px ${NAV_PADDING - NAV_LINK_PADDING}px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transform: color ${({ theme }) => theme.animation.duration.mouse};
  user-select: none;
  width: 100%;

  &:hover,
  &:focus,
  &.selected {
    color: ${({ theme }) => theme.colors.brand};
    text-decoration: none;

    svg path {
      stroke: ${({ theme }) => theme.colors.brandLight};
    }
  }

  ${mediaMin("md")`
    border-top: none;
    color: ${({ theme }) => theme.colors.white};
    height: ${NAV_HEIGHT}px;
    line-height: ${NAV_HEIGHT}px;
    padding: 0 ${(NAV_PADDING * 2) / 3 - NAV_LINK_PADDING}px;

    &:hover,
    &:focus,
    &.selected {
      color: ${({ theme }) => theme.colors.white};

      & > ${NavBarLinkContent} {
        background-color: ${({ theme }) => theme.colors.brandLight};

        svg path {
          stroke: ${({ theme }) => theme.colors.white};
        }
      }
    }
  `}

  ${mediaMin("nr")`
    padding: 0 ${NAV_PADDING - NAV_LINK_PADDING}px;
  `}

  svg {
    margin: -2px 7px 0 0;
    vertical-align: middle;

    path {
      stroke: ${({ theme }) => theme.colors.text.secondary};

      ${mediaMin("md")`
        stroke: white;
      `}
    }
  }
`;
