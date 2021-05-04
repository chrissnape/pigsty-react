import { ChangeEvent, FC, FocusEventHandler } from 'react';
import { Input } from './style';

type Props = {
  isError?: boolean,
  min?: string,
  max?: string,
  onBlur?: FocusEventHandler,
  onChange: Function,
  placeholder?: string,
  type?: 'number' | 'text'
  value: string,
}

const InputComponent: FC<Props> = ({
  isError = false, min, max, onBlur = () => {}, onChange, placeholder = '', type = 'text', value,
}): JSX.Element => (
  <Input
    isError={isError}
    min={min}
    max={max}
    onBlur={onBlur}
    onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
    placeholder={placeholder}
    type={type}
    value={value}
    data-testid="input"
  />
);

export default InputComponent;
