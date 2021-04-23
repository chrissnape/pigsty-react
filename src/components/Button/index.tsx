import { FC, MouseEventHandler } from 'react';
import { Button } from './style';

type Props = {
  label: string,
  onClick: MouseEventHandler,
  primary?: boolean,
  secondary?: boolean,
}

const ButtonComponent: FC<Props> = ({
  label, onClick, primary = false, secondary = false,
}): JSX.Element => (
  <Button primary={primary} secondary={secondary} onClick={onClick} data-testid="button">
    {label}
  </Button>
);

export default ButtonComponent;
