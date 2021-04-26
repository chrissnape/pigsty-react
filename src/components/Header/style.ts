import styled from 'styled-components';
import { breakpoints, primaryColour } from '../../utils/styles';

export const Header = styled.div`
  padding: 25px 0;
`;

export const Logo = styled.h1`
  color: ${primaryColour};
  margin: 0;
  padding: 0;
`;

export const Right = styled.div`
  text-align: right;
`;

export const ButtonWrapper = styled.div`
  display: inline-block;
  margin-left: 25px;
`;

export const Desktop = styled.div`
  @media (max-width: ${breakpoints.sm}px) {
    display: none;
  };
`;

export const Mobile = styled.div`
  display: none;
  @media (max-width: ${breakpoints.sm}px) {
    display: block;
  };
`;