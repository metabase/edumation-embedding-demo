export interface ICheckboxProps {
  id: string;
  name: string;
  checked?: boolean;
  onChange(id: string, checked: boolean): void;
}
