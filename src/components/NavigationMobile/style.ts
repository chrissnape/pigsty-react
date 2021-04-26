import styled from 'styled-components';
import { primaryMedium, primaryDark } from '../../utils/styles';

export const Navigation = styled.div`
  background-color: ${primaryMedium};
  border-bottom: 1px solid ${primaryDark};
  padding: 10px 0;
  position: fixed;
  height: 39px;
  width: 100%;
  z-index: 1;
`;

export const BurgerIcon = styled.div`
  align-items: center;
  color: #fff;
  display: flex;
  font-size: 1.8em;
`;

export const Logo = styled.h1`
  color: #fff;
  margin: 0;
  padding: 0;
`;

export const Underlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  height: calc(100vh - 60px);
  margin-top: 60px;
  position: absolute;
  top: 0;
  width: 100%;
`;

export const MenuList = styled.ul`
  margin: 0;
  padding: 0;
`;
