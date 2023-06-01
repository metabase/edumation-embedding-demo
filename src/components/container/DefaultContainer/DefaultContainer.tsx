import { PropsWithChildren, ReactElement } from "react";

export default function DefaultContainer({
  children,
}: PropsWithChildren): ReactElement {
  return <>{children}</>;
}
