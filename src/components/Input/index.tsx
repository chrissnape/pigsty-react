import { FC, ChangeEvent } from 'react';
import { Input } from './style';

type Props = {
  onChange: Function,
  placeholder: string,
  value: string,
}

const InputComponent: FC<Props> = ({onChange, placeholder, value}): JSX.Element => (
  <Input
    onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
    placeholder={placeholder}
    value={value}
    data-testid="input"
  />
);

export default InputComponent;
