import { ReactElement } from "react";
import { IIconProps } from "../types";

export default function Home({ color }: IIconProps): ReactElement {
  return (
    <svg
      width="14"
      height="15"
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.06299 14V9.06666C5.06299 8.69329 5.06299 8.5066 5.13565 8.364C5.19957 8.23855 5.30155 8.13657 5.42699 8.07265C5.5696 7.99999 5.75629 7.99999 6.12966 7.99999H7.99632C8.36969 7.99999 8.55637 7.99999 8.69898 8.07265C8.82442 8.13657 8.92641 8.23855 8.99033 8.364C9.06299 8.5066 9.06299 8.69329 9.06299 9.06666V14M6.40812 1.84267L1.88658 5.35942C1.58434 5.5945 1.43321 5.71204 1.32434 5.85924C1.2279 5.98963 1.15606 6.13652 1.11234 6.2927C1.06299 6.46901 1.06299 6.66046 1.06299 7.04337V11.8667C1.06299 12.6134 1.06299 12.9868 1.20831 13.272C1.33614 13.5229 1.54012 13.7268 1.791 13.8547C2.07622 14 2.44958 14 3.19632 14H10.9297C11.6764 14 12.0498 14 12.335 13.8547C12.5859 13.7268 12.7898 13.5229 12.9177 13.272C13.063 12.9868 13.063 12.6134 13.063 11.8667V7.04337C13.063 6.66046 13.063 6.46901 13.0136 6.2927C12.9699 6.13652 12.8981 5.98963 12.8016 5.85924C12.6928 5.71204 12.5416 5.5945 12.2394 5.35942L7.71786 1.84267C7.48364 1.6605 7.36653 1.56941 7.23722 1.5344C7.12312 1.50351 7.00286 1.50351 6.88876 1.5344C6.75944 1.56941 6.64234 1.6605 6.40812 1.84267Z"
        stroke={color || "white"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
