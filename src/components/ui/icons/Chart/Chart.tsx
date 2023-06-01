import { ReactElement } from "react";
import { IIconProps } from "../types";

export default function Chart({ color }: IIconProps): ReactElement {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.063 13H2.12965C1.75629 13 1.5696 13 1.42699 12.9273C1.30155 12.8634 1.19957 12.7614 1.13565 12.636C1.06299 12.4934 1.06299 12.3067 1.06299 11.9333V1M13.063 3.66667L9.44011 7.28954C9.30811 7.42155 9.2421 7.48755 9.16599 7.51228C9.09905 7.53403 9.02693 7.53403 8.95998 7.51228C8.88387 7.48755 8.81787 7.42155 8.68586 7.28954L7.44011 6.04379C7.30811 5.91178 7.2421 5.84578 7.16599 5.82105C7.09905 5.7993 7.02693 5.7993 6.95998 5.82105C6.88387 5.84578 6.81787 5.91178 6.68586 6.04379L3.72966 9M13.063 3.66667H10.3963M13.063 3.66667V6.33333"
        stroke={color || "white"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
