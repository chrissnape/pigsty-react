import styled from 'styled-components';
import {
  border,
  borderRadius,
  fontColour,
  fontSize,
} from '../../utils/styles';

export const Input = styled.input`
  border: ${border};
  border-radius: ${borderRadius};
  color: ${fontColour};
  font-size: ${fontSize};
  padding: 5px;
  width: calc(100% - 12px);
`;
