import { FC } from 'react';
import { Container, Row, Col } from 'react-grid';
import { NavigationListItem } from '..';
import * as Style from './style';

const NavigationComponent: FC<{}> = (): JSX.Element => (
  <Style.Navigation data-testid="navigation">
    <Container>
      <Row>
        <Col>
          <Style.List>
            {['Search', 'Post Advert', 'My Adverts'].map((label: string) => (
              <NavigationListItem label={label} primary/>
            ))}
          </Style.List>
        </Col>
      </Row>
    </Container>
  </Style.Navigation>
);

export default NavigationComponent;
