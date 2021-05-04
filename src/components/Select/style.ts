import styled, { css } from 'styled-components';
import {
  border,
  borderRadius,
  error,
  fontColour,
  fontSize,
} from '../../utils/styles';

type Props = {
  isError: boolean,
}

export const Option = styled.option``;

export const Select = styled.select`
  border: ${border};
  border-radius: ${borderRadius};
  color: ${fontColour};
  font-size: ${fontSize};
  padding: 5px;
  width: 100%;
  ${(props: Props) => (props.isError) && css`
    border-color: ${error};
    color: ${error};
  `}
`;
