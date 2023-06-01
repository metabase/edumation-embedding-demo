import styled from "styled-components";

export const CheckboxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  user-select: none;
`;

export const CheckboxLabel = styled.label`
  font-size: 14px;
  font-weight: 500;
  margin: 0;
  opacity: ${({ theme }) => theme.opacity.disabled};
  padding: 0;
  text-transform: capitalize;
`;

export const CheckboxInput = styled.input`
  background-color: transparent;
  border: none;
  margin: 0;
  outline: none;
  padding: 0;

  &:focus {
    box-shadow: none;
    outline: 0;
  }

  &:checked + ${CheckboxLabel} {
    opacity: 1;
  }
`;
