import { FC, MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';
import { NavigationListItem } from './style';

type Props = {
  isMobile?: boolean,
  label: string,
  onClick?: MouseEventHandler,
  primary?: boolean,
  secondary?: boolean,
}

export const getItemLabel: Function = (label: string): string => label.toLowerCase().replace(/\s/g, '-');

const NavigationListItemComponent: FC<Props> = ({
  isMobile = false, label, onClick = () => {}, primary = false, secondary = false
}): JSX.Element => {
  const itemLabel: string = getItemLabel(label);
  return (
    <Link
      key={itemLabel}
      style={{textDecoration: 'none'}}
      to={`/${itemLabel}`}
      onClick={onClick}
      data-testid="link"
    >
      <NavigationListItem isMobile={isMobile} primary={primary} secondary={secondary} data-testid="label" >
        {label}
      </NavigationListItem>
    </Link>
  );
}

export default NavigationListItemComponent;
