import { FC, ChangeEvent } from 'react';
import { Option, Select } from './style';

type OptionType = {
  id: string,
  label: string,
}

type Props = {
  isError?: boolean,
  onChange: Function,
  options: Array<OptionType>,
  value: string,
}

const SelectComponent: FC<Props> = ({
  isError = false, onChange, options, value,
}): JSX.Element => (
  <Select
    isError={isError}
    onChange={(e: ChangeEvent<HTMLSelectElement>) => onChange(e.target.value)}
    value={value}
    data-testid="select"
  >
    {options.map((option: OptionType) => (
      <Option key={option.id} value={option.id}>
        {option.label}
      </Option>
    ))}
  </Select>
);

export default SelectComponent;
