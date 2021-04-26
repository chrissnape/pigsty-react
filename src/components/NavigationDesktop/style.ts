import styled from 'styled-components';
import { breakpoints, primaryMedium, primaryDark } from '../../utils/styles';

export const Navigation = styled.div`
  background-color: ${primaryMedium};
  border: 1px solid ${primaryDark};
  border-left: none;
  border-right: none;
`;

export const BurgerIcon = styled.div`
  align-items: center;
  color: #fff;
  display: flex;
  font-size: 1.8em;
`;

export const List = styled.ul`
  display: inline-block;
  margin: 0;
  padding: 0;
`;

export const Logo = styled.h1`
  color: #fff;
  margin: 0;
  padding: 0;
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
    padding: 10px 0;
  };
`;
