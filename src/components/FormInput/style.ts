import styled, { css } from 'styled-components';
import { error, fontColour, fontSize } from '../../utils/styles';

export const ErrorWrapper = styled.div`
  margin-top: 10px;
`;

export const FormInput = styled.div`
  margin-bottom: 10px;
`;

export const Label = styled.div`
  color: ${fontColour};
  font-size: ${fontSize};
  font-weight: bold;
  margin-bottom 5px;
  ${(props: { isError: boolean }) => (props.isError) && css`
    color: ${error};
  `}
`;
