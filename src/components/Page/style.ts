import styled from 'styled-components';
import { breakpoints } from '../../utils/styles';

export const Page = styled.div`
  padding: 25px 0;
  @media (max-width: ${breakpoints.sm}px) {
    padding: 75px 0 15px;
  };
`;

