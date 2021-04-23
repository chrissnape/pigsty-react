import styled from 'styled-components';
import {
  greyLight,
} from '../../utils/styles';

export const Thumbnail = styled.div`
  background-color: ${greyLight};
  cursor: pointer;
  overflow: hidden;
  position: relative;
`;

export const Number = styled.div`
  display: inline-block;
  font-size: 0.8em;
  margin-left: 5px;
  vertical-align: middle;
`;

export const Overlay = styled.div`
  background-color: rgba(0,0,0,0.5);
  bottom: 0;
  color: #fff;
  justify-content: center;
  padding: 7px;
  position: absolute;
  right: 0;
`;

export const Image = styled.img`
  object-fit: cover;
`;
