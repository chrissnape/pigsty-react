import { FC, MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './style';

type Props = {
  label: string,
  onClick?: MouseEventHandler,
  primary?: boolean,
  secondary?: boolean,
  url?: string,
}

const ButtonComponent: FC<Props> = ({
  label, onClick = () => {}, primary = false, secondary = false, url = '',
}): JSX.Element => {
  const button = (
    <Button primary={primary} secondary={secondary} onClick={onClick} data-testid="button">
      {label}
    </Button>
  );
  return (url) ? <Link to={url} data-testid="link">{button}</Link> : button;
}

export default ButtonComponent;
