import { ClearFixMixin, mediaMin } from "@constants/theme/utils";
import styled from "styled-components";

const HorizontalList = styled.ul`
  ${ClearFixMixin()}
  display: inline-block;
  list-style-type: none;
  margin: 1rem 0 0 0;
  padding: 0;
  width: 100%;

  & > li {
    display: inline-block;
    margin: 0 0 1rem 0;
    padding: 0;
    width: 100%;

    &:last-child {
      margin-right: 0;
    }

    ${mediaMin("sm")`
      float: left;
      padding-right: 1rem;
      width: 50%;

      &:nth-child(2n) {
        padding-right: 0;
      }

      &:nth-child(2n+1) {
        clear: both;
      }
    `}

    ${mediaMin("md")`
      width: 33.333%;

      &:nth-child(2n) {
        padding-right: 1rem;
      }

      &:nth-child(2n+1) {
        clear: none;
      }

      &:nth-child(3n) {
        padding-right: 0;
      }

      &:nth-child(3n+1) {
        clear: both;
      }
    `}

    ${mediaMin("nr")`
      width: 25%;

      &:nth-child(3n) {
        padding-right: 1rem;
      }

      &:nth-child(3n+1) {
        clear: none;
      }

      &:nth-child(4n) {
        padding-right: 0;
      }

      &:nth-child(4n+1) {
        clear: both;
      }
    `}

    ${mediaMin("xl")`
      float: left;
      // margin: 0 1rem 1rem 0;
      width: 20%;

      &:nth-child(4n) {
        padding-right: 1rem;
      }

      &:nth-child(4n+1) {
        clear: none;
      }

      &:nth-child(5n) {
        padding-right: 0;
      }

      &:nth-child(5n+1) {
        clear: both;
      }
    `}
  }
`;

export default HorizontalList;
