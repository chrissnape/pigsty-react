import styled, { css } from 'styled-components';
import {
  border,
  borderRadius,
  fontColour,
  fontSize,
  primaryDark,
  primaryMedium,
  secondaryDark,
  secondaryMedium,
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
  background-color: #f9f9f9;
  border-radius: ${borderRadius};
  border: ${border};
  color: ${fontColour};
  cursor: pointer;
  font-size: ${fontSize};
  font-weight: bold;
  padding: 10px;
  text-align: center;
  &:hover {
    background-color: #eee;
  }
  ${(props: Props) => (props.primary || props.secondary) && css`
    background-color: ${getBackgroundColour(props.primary)};
    border-color: ${(props.primary) ? primaryDark : secondaryDark};
    color: #fff;
    &:hover {
      background-color: ${getBackgroundColour(props.primary, true)};
    };
  `}
`;
