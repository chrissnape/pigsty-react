import styled, { css } from 'styled-components';
import {
  fontColour,
  fontSize,
  greyLight,
  primaryMedium,
  primaryDark,
  secondaryMedium,
  secondaryDark,
} from '../../utils/styles';

type Props = {
  primary: boolean,
  secondary: boolean,
}

const getBackgroundColour: Function = (primary: boolean, darken: boolean): string => {
  if (darken) return (primary) ? primaryDark : secondaryDark;
  return (primary) ? primaryMedium : secondaryMedium;
}

export const Button = styled.button`
  background-color: ${greyLight};
  border-radius: 5px;
  border: none;
  color: ${fontColour};
  cursor: pointer;
  font-size: ${fontSize};
  font-weight: bold;
  padding: 10px 50px;
  text-align: center;
  ${(props: Props) => (props.primary || props.secondary) && css`
    background-color: ${getBackgroundColour(props.primary)};
    color: #fff;
    &:hover {
      background-color: ${getBackgroundColour(props.primary, true)};
    };
  `}
`;
