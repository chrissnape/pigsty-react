import styled, { css } from 'styled-components';
import {
  greyDark,
  greyMedium,
  primaryDark,
  primaryMedium,
  secondaryDark,
  secondaryMedium,
} from '../../utils/styles';

type Props = {
  primary: boolean,
  secondary: boolean,
  isMobile: boolean,
}

const getBackgroundColour: Function = (primary: boolean, darken: boolean): string => {
  if (darken) return (primary) ? primaryDark : secondaryDark;
  return (primary) ? primaryMedium : secondaryMedium;
}

const getBorder: Function = (primary: boolean, secondary: boolean, isMobile: boolean) => (
  (isMobile)
    ? `border-bottom: 1px solid ${(primary) ? primaryDark : (secondary) ? secondaryDark : greyDark};`
    : ''
);

export const NavigationListItem = styled.li`
  ${(props: Props) => getBorder(props.primary, props.secondary, props.isMobile)};
  background-color: ${greyMedium};
  color: #fff;
  display: ${(props: Props) => props.isMobile ? 'block' : 'inline-block'};
  list-style: none;
  padding: 15px 25px;
  &:hover {
    background-color: ${primaryDark};
  }
  ${(props: Props) => (props.primary || props.secondary) && css`
    background-color: ${getBackgroundColour(props.primary)};
    color: #fff;
    &:hover {
      background-color: ${getBackgroundColour(props.primary, true)};
    };
  `}
`;
