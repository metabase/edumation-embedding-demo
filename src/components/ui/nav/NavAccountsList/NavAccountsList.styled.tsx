import { ClearFixMixin, mediaMin } from "@constants/theme/utils";
import styled from "styled-components";
import { NAV_HEIGHT, NAV_PADDING } from "../Nav/constants";
import { NAV_LINK_PADDING } from "../NavBarLink/constants";
import { PROFILE_IMAGE_SIZE } from "./constants";

export const ProfileImageContainer = styled.div`
  ${ClearFixMixin()}
  border-radius: ${PROFILE_IMAGE_SIZE}px;
  margin: 0;
  overflow: hidden;
  position: relative;
  user-select: none;

  img {
    float: left;
    vertical-align: bottom;
  }
`;

export const NavAccountsListWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  position: relative;
  user-select: none;
  z-index: 10;
`;

// label

export const AccountLabel = styled.button`
  align-items: center;
  appearance: none;
  background-color: ${({ theme }) => theme.colors.brandLight};
  border: none;
  color: ${({ theme }) => theme.colors.white};
  display: inline-flex;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  height: ${NAV_HEIGHT}px;
  line-height: ${NAV_HEIGHT}px;
  margin: 0;
  padding: ${2 * NAV_LINK_PADDING}px ${2 * NAV_PADDING}px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transform: color ${({ theme }) => theme.animation.duration.mouse};
  user-select: none;
  width: 100%;

  &:hover,
  &:focus {
    text-decoration: none;
  }

  ${mediaMin("md")`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.white};
    padding: 0 ${NAV_PADDING * 2}px;
  `}
`;

export const AccountLabelText = styled.span`
  display: inline-block;
  flex: 1 0 auto;
  margin-left: 8px;

  ${mediaMin("md")`
    display: none;
  `}

  ${mediaMin("nr")`
    display: inline-block;
  `}
`;

export const AccountLebelIcon = styled.span`
  margin-left: 8px;

  & > svg {
    vertical-align: middle;
  }
`;

// list

export const AccountsList = styled.ul`
  background-color: ${({ theme }) => theme.colors.background.medium};
  border-radius: ${({ theme }) => theme.ui.border.radius.xl};
  bottom: 100%;
  box-shadow: 0 5px 15px ${({ theme }) => theme.colors.panel};
  left: ${NAV_PADDING}px;
  list-style-type: none;
  margin: 0 0 -${NAV_LINK_PADDING}px 0;
  min-width: 50%;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: auto;
  z-index: 11;

  & > li {
    border-bottom: ${({ theme }) => theme.ui.border.width.small} solid
      ${({ theme }) => theme.colors.border.medium};

    &:last-child {
      border-bottom: none;
    }
  }

  ${mediaMin("md")`
    bottom: auto;
    left: auto;
    margin-top: -${NAV_LINK_PADDING}px;
    min-width: 150px;
    right: ${NAV_PADDING}px;
    top: 100%;
  `}
`;

export const AccountButton = styled.button`
  align-items: center;
  appearance: none;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.brand};
  display: inline-flex;
  flex-direction: row;
  flex-wrap: nowrap;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  justify-content: flex-start;
  line-height: normal;
  margin: 0;
  padding: ${2 * NAV_LINK_PADDING}px ${NAV_PADDING}px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transform: color ${({ theme }) => theme.animation.duration.mouse};
  user-select: none;
  width: 100%;

  &:hover,
  &:focus,
  &.selected {
    color: ${({ theme }) => theme.colors.brandDark};
    text-decoration: none;
  }

  ${mediaMin("md")`
    padding: ${1.5 * NAV_LINK_PADDING}px ${NAV_PADDING}px;
  `}
`;

export const AccountButtonContent = styled.div`
  align-items: flex-start;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0 0 0 8px;
  padding: 0;
`;

export const AccountButtonText = styled.span``;
export const AccountButtonSubtext = styled.span`
  color: ${({ theme }) => theme.colors.mediumGrey};
  font-weight: 400;
  text-transform: capitalize;
`;
