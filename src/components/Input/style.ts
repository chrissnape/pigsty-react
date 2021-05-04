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

export const Input = styled.input`
  border: ${border};
  border-radius: ${borderRadius};
  color: ${fontColour};
  font-size: ${fontSize};
  padding: 5px;
  width: calc(100% - 12px);
  ${(props: Props) => (props.isError) && css`
    border-color: ${error};
  `}
`;
