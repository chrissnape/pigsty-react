import { FC } from 'react';
import { Input, Label } from './style';

type Props = {
  isChecked: boolean,
  label: string,
  onChange: Function,
  optionId: string,
}

const OptionComponent: FC<Props> = ({
  isChecked, label, onChange, optionId,
}): JSX.Element => (
  <Label data-testid="option-label">
    <Input
      checked={isChecked}
      type="radio"
      value={optionId}
      onChange={() => onChange(optionId)}
      data-test-id="input"
    />
    {label}
  </Label>
);

export default OptionComponent;
