import styled from 'styled-components';
import { border, secondaryColour } from '../../utils/styles';

export const AccomodationBlock = styled.div`
  border: ${border};
  border-radius: 5px;
  display: flex;
  height: 180px;
  text-align: left;
  overflow: hidden;
`;

export const ThumbnailWrapper = styled.div`
  width: 250px;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 15px;
`;

export const Top = styled.div`
  flex: 1;
`;

export const Title = styled.a`
  color: ${secondaryColour};
  cursor: pointer;
  font-size: 1.4em;
  font-weight: bold;
  &: hover {
    text-decoration: underline;
  }
`;

export const SubTitle = styled.div`
  margin: 10px 0px;
`;

export const Type = styled.span`
  border-right: ${border};
  display: inline-block;
  font-weight: bold;
  margin-right: 10px;
  padding-right: 10px;
`;

export const Availability = styled.span`
  font-weight: bold;
`;

export const Bottom = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
`;

export const Price = styled.div`
  vertical-align: bottom;
`;

export const Amount = styled.div`
  color: ${secondaryColour};
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Bills = styled.div`
  font-size: 0.8em;
`;
