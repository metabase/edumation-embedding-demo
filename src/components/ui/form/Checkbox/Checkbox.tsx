import { ReactElement } from "react";
import {
  CheckboxInput,
  CheckboxLabel,
  CheckboxWrapper,
} from "./Checkbox.styled";
import { ICheckboxProps } from "./types";

export default function Checkbox({
  id,
  name,
  checked,
  onChange,
}: ICheckboxProps): ReactElement {
  return (
    <CheckboxWrapper>
      <CheckboxInput
        id={id}
        type="checkbox"
        checked={checked || false}
        onChange={(e) => onChange(id, e.currentTarget.checked)}
      />
      <CheckboxLabel htmlFor={id}>{name}</CheckboxLabel>
    </CheckboxWrapper>
  );
}
