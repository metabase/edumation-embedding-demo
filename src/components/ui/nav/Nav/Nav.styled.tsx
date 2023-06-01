import { ClearFixMixin, mediaMin } from "@constants/theme/utils";
import Link from "next/link";
import styled from "styled-components";
import { NAV_HEIGHT, NAV_PADDING } from "./constants";
import { INavBarContainer } from "./types";

export const NavBar = styled.nav`
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.medium};
  left: 0;
  padding: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 2;

  ${mediaMin("md")`
    background-color: ${({ theme }) => theme.colors.brand};
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    position: fixed;
  `}
`;

export const NavBarMobileBackground = styled.button<INavBarContainer>`
  background-color: ${({ theme }) => theme.colors.panel};
  border: none;
  display: inline-block;
  height: 100%;
  left: 0;
  margin: 0;
  opacity: ${({ open }) => (open ? 1 : 0)};
  padding: 0;
  pointer-events: ${({ open }) => (open ? "auto" : "none")};
  position: fixed;
  top: 0;
  transition: opacity ${({ theme }) => theme.animation.duration.panel};
  user-select: none;
  width: 100%;

  ${mediaMin("md")`
    display: none;
  `}
`;

// containers

export const NavBarHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.brand};
  box-shadow: 0 0 10px ${({ theme }) => theme.colors.panel};
  display: inline-block;
  position: relative;
  vertical-align: bottom;
  width: 100%;
  z-index: 2;

  ${mediaMin("md")`
    box-shadow: none;
    flex: 0 0 auto;
    width: auto;
  `}
`;

export const NavBarContainer = styled.div<INavBarContainer>`
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.white};
  border-right: 1px solid ${({ theme }) => theme.colors.border.medium};
  bottom: 0;
  display: inline-flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  justify-content: space-between;
  left: ${({ open }) => (open ? 0 : "-85%")};
  padding-top: 1px;
  position: fixed;
  top: ${NAV_HEIGHT - 1}px;
  transition: left ${({ theme }) => theme.animation.duration.panel};
  white-space: nowrap;
  width: 80%;
  z-index: 1;

  ${mediaMin("md")`
    background-color: transparent;
    border: none;
    bottom: auto;
    float: right;
    flex: 1 0 auto;
    flex-direction: row;
    left: auto;
    padding: 0;
    position: relative;
    right: auto;
    top: auto;
    width: auto;
  `}
`;

export const NavBarContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 100%;
  width: 100%;

  ${mediaMin("md")`
    align-items: flex-start;
    flex-direction: row;
    height: auto;
  `}
`;

export const NavBarFooter = styled.footer`
  background-color: transparent;
  border-top: 1px solid ${({ theme }) => theme.colors.border.medium};
  margin: ${NAV_PADDING * 2}px 0 0 0;
  padding: 0;
  position: relative;
  width: 100%;

  ${mediaMin("md")`
    border-top: none;
    display: inline-block;
    margin-top: 0;
    width: auto;
  `}
`;

// top nav container

export const NavBarTopNavContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 100%;

  ${mediaMin("md")`
    display: inline-block;
    width: auto;
  `}
`;

export const NavBarToggleButtonsContainer = styled.div`
  ${mediaMin("md")`
    display: none;
  `}
`;

// logo

export const LogoLink = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  display: inline-block;
  height: ${NAV_HEIGHT}px;
  margin: 0;
  padding: 0;
  position: relative;
  text-decoration: none;
  width: 100%;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`;

export const LogoLinkContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  height: ${NAV_HEIGHT}px;
  overflow: hidden;
  padding: 0 ${NAV_PADDING * 2}px 0 0;
  width: 100%;

  & > div {
    transform: translate(4px, 2px);
    user-select: none;
    width: ${NAV_HEIGHT + 8}px;
  }
`;

export const LogoLinkTitle = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  display: inline-block;
  font-size: 16px;
  font-weight: 900;
  letter-spacing: -0.03em;
  margin: 0;
  padding: 0;
  width: auto;
`;

// nav

export const NavBarListContainer = styled.div`
  ${ClearFixMixin()}
  display: inline-block;
  flex: 1 0 auto;
  list-style-type: none;
  margin: 24px 0 0 0;
  padding: 0;
  text-align: left;
  vertical-align: bottom;
  width: 100%;

  &:first-child {
    margin-top: 0;
    width: auto;
  }

  ${mediaMin("md")`
    text-align: center;
  `}
`;

export const NavBarList = styled.ul`
  ${ClearFixMixin()}
  display: inline-block;
  flex: 1 0 auto;
  list-style-type: none;
  margin: 0;
  padding: 0;
  vertical-align: bottom;
  width: 100%;

  ${mediaMin("md")`
    width: auto;
  `}
`;

export const NavBarListItem = styled.li`
  border-top: 1px solid ${({ theme }) => theme.colors.border.medium};
  margin: 0;
  padding: 0;
  width: 100%;

  &:first-child {
    border-top: none;

    a,
    button {
      border: none;
    }
  }

  ${mediaMin("md")`
    border-top: none;
    float: left;
    width: auto;
  `}
`;

// env

export const TheEnv = styled.span`
  background-color: ${({ theme }) => theme.colors.panel};
  bottom: 0;
  color: ${({ theme }) => theme.colors.white};
  display: inline-block;
  font-size: 10px;
  font-weight: 900;
  left: 0;
  padding: 0;
  pointer-events: none;
  position: fixed;
  text-align: center;
  text-transform: uppercase;
  user-select: none;
  width: 100%;
  z-index: 1;
`;
