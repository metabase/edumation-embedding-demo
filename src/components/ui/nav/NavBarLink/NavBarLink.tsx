import { useRouter } from "next/router";
import { ReactElement } from "react";
import { NavBarLinkContent, NavBarLinkWrapper } from "./NavBarLink.styled";
import { INavBarLink } from "./types";

export default function NavBarLink({
  href,
  children,
}: INavBarLink): ReactElement {
  const router = useRouter();
  const { pathname } = router;

  return (
    <NavBarLinkWrapper
      href={href}
      className={pathname === href ? "selected" : ""}
    >
      <NavBarLinkContent>{children}</NavBarLinkContent>
    </NavBarLinkWrapper>
  );
}
