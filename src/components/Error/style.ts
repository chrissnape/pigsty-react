import styled from 'styled-components';
import { error, fontSize } from '../../utils/styles';

export const Error = styled.div`
  color: ${error};
  font-size: ${fontSize};
`;

export const Label = styled.span`
  margin-left: 5px;
  vertical-align: top;
`;