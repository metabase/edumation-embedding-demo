import styled from "styled-components";

const PageHeader = styled.header`
  margin: 0 auto;
  padding: 40px 32px 20px 32px;
  position: relative;
  width: 100%;

  &:last-child {
    padding-bottom: 40px;
  }

  & > button {
    position: absolute;
    right: 32px;
    top: 40px;
    z-index: 1;
  }
`;

export default PageHeader;
