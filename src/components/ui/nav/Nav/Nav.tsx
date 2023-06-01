import { ReactElement, useCallback, useState, useEffect } from "react";
import {
  NavBar,
  NavBarMobileBackground,
  NavBarTopNavContainer,
  NavBarToggleButtonsContainer,
  LogoLink,
  LogoLinkContent,
  LogoLinkTitle,
  TheEnv,
  NavBarList,
  NavBarListItem,
  NavBarContent,
  NavBarFooter,
  NavBarHeader,
  NavBarContainer,
  NavBarListContainer,
} from "./Nav.styled";
import { getEnv, isDevelopment, isProduction } from "@utils/config";
import MenuButton from "@components/ui/buttons/MenuButton";
import CloseButton from "@components/ui/buttons/CloseButton";
import Logo from "@components/ui/icons/Logo";
import NavBarLink from "../NavBarLink";
import Home from "@components/ui/icons/Home";
import Book from "@components/ui/icons/Book";
import Hat from "@components/ui/icons/Hat";
import Chart from "@components/ui/icons/Chart";
import NavAccountsList from "../NavAccountsList";
import { useRouter } from "next/router";

export default function Nav(): ReactElement {
  // mobile menu
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggleMenu = useCallback(() => {
    setToggleMenu(!toggleMenu);
  }, [setToggleMenu, toggleMenu]);

  useEffect(() => {
    const $html = document.documentElement;
    if (toggleMenu) {
      $html.scrollTop = 0;
    }
    $html.style.overflow = toggleMenu ? "hidden" : "auto";

    const $body = document.body;
    $body.style.overflow = toggleMenu ? "hidden" : "auto";
  }, [toggleMenu]);

  // route change
  const router = useRouter();

  useEffect(() => {
    function handleRouteChange() {
      setToggleMenu(false);
    }

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  return (
    <>
      <NavBar>
        <NavBarMobileBackground open={toggleMenu} onClick={handleToggleMenu} />

        <NavBarHeader>
          <NavBarTopNavContainer>
            <LogoLink href="/">
              <LogoLinkContent>
                <Logo />
                <LogoLinkTitle>Edumation</LogoLinkTitle>
              </LogoLinkContent>
            </LogoLink>

            <NavBarToggleButtonsContainer>
              {toggleMenu ? (
                <CloseButton iconColor="white" onClick={handleToggleMenu} />
              ) : (
                <MenuButton onClick={handleToggleMenu} />
              )}
            </NavBarToggleButtonsContainer>
          </NavBarTopNavContainer>
        </NavBarHeader>

        <NavBarContainer open={toggleMenu}>
          <NavBarContent>
            <NavBarListContainer>
              <NavBarList>
                <NavBarListItem>
                  <NavBarLink href="/">
                    <Home />
                    Overview
                  </NavBarLink>
                </NavBarListItem>
                <NavBarListItem>
                  <NavBarLink href="/courses">
                    <Book />
                    Courses
                  </NavBarLink>
                </NavBarListItem>
                <NavBarListItem>
                  <NavBarLink href="/assignments">
                    <Hat />
                    Assignments
                  </NavBarLink>
                </NavBarListItem>
                <NavBarListItem>
                  <NavBarLink href="/reports">
                    <Chart />
                    Reports
                  </NavBarLink>
                </NavBarListItem>
                {isDevelopment() && (
                  <>
                    <NavBarListItem>
                      <NavBarLink href="/embedding/full-app">
                        Full app
                      </NavBarLink>
                    </NavBarListItem>
                    <NavBarListItem>
                      <NavBarLink href="/embedding/public">Public</NavBarLink>
                    </NavBarListItem>
                    <NavBarListItem>
                      <NavBarLink href="/embedding/post-message">
                        Post message
                      </NavBarLink>
                    </NavBarListItem>
                  </>
                )}
              </NavBarList>
            </NavBarListContainer>

            <NavBarFooter>
              <NavAccountsList />
            </NavBarFooter>
          </NavBarContent>
        </NavBarContainer>
      </NavBar>

      {!isProduction() && <TheEnv>{getEnv(true)}</TheEnv>}
    </>
  );
}
