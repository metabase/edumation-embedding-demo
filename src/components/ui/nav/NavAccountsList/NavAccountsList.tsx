import ArrowDown from "@components/ui/icons/ArrowDown";
import ArrowUp from "@components/ui/icons/ArrowUp";
import { useAccountsStore } from "@stores/accounts";
import { ACCOUNTS } from "@stores/accounts/constants";
import Image from "next/image";
import { ReactElement, useCallback, useEffect, useRef, useState } from "react";
import { PROFILE_IMAGE_SIZE } from "./constants";
import {
  AccountButton,
  ProfileImageContainer,
  AccountsList,
  NavAccountsListWrapper,
  AccountLabel,
  AccountLabelText,
  AccountButtonText,
  AccountButtonSubtext,
  AccountButtonContent,
  AccountLebelIcon,
} from "./NavAccountsList.styled";

export default function NavAccountsList(): ReactElement {
  const [opened, setOpened] = useState(false);
  const { account, switchAccount } = useAccountsStore((state) => ({
    account: state.account,
    switchAccount: state.switchAccount,
  }));
  const username = `${account.first_name} ${account.last_name}`;

  // body
  const wrapperRef = useRef<HTMLDivElement>(null);
  const closeMenu = useCallback(
    (e: MouseEvent) => {
      const $target = e.target as HTMLElement;
      if (opened && !wrapperRef.current?.contains($target)) {
        setOpened(false);
      }
    },
    [opened],
  );

  useEffect(() => {
    const $html = document.documentElement;
    $html.addEventListener("click", closeMenu);
    return () => {
      $html.removeEventListener("click", closeMenu);
    };
  }, [closeMenu]);

  return (
    <NavAccountsListWrapper ref={wrapperRef}>
      <AccountLabel onClick={() => setOpened(!opened)}>
        <ProfileImageContainer>
          <Image
            src={account.avatar}
            alt={username}
            height={PROFILE_IMAGE_SIZE}
            width={PROFILE_IMAGE_SIZE}
          />
        </ProfileImageContainer>
        <AccountLabelText>{username}</AccountLabelText>
        <AccountLebelIcon>
          {opened ? <ArrowUp /> : <ArrowDown />}
        </AccountLebelIcon>
      </AccountLabel>

      {opened && (
        <AccountsList>
          {ACCOUNTS.map((accountObj, index) => {
            const username = `${accountObj.first_name} ${accountObj.last_name}`;

            return (
              <li key={`account_${index}`}>
                <AccountButton
                  onClick={() => {
                    switchAccount(accountObj);
                    setOpened(false);
                  }}
                >
                  <ProfileImageContainer>
                    <Image
                      src={accountObj.avatar}
                      alt={username}
                      height={PROFILE_IMAGE_SIZE}
                      width={PROFILE_IMAGE_SIZE}
                    />
                  </ProfileImageContainer>
                  <AccountButtonContent>
                    <AccountButtonText>{username}</AccountButtonText>
                    <AccountButtonSubtext>
                      {accountObj.occupation}
                    </AccountButtonSubtext>
                  </AccountButtonContent>
                </AccountButton>
              </li>
            );
          })}
        </AccountsList>
      )}
    </NavAccountsListWrapper>
  );
}
