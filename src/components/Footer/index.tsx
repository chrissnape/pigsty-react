import { FC } from 'react';
import { Container, Row, Col } from 'react-grid';
import { Footer } from './style';

const FooterComponent: FC<{}> = (): JSX.Element => (
  <Footer data-testid="footer">
    <Container>
      <Row>
        <Col xs="4">
          <h5>
            About Us.
          </h5>
          <ul>
            <li>
              Lorem Ipsum
            </li>
            <li>
              Dolor sit amet
            </li>
            <li>
              Consectetur adipiscing elit
            </li>
          </ul>
        </Col>
        <Col xs="4">
          <h5>
            Terms and Conditions.
          </h5>
          <ul>
            <li>
              Lorem Ipsum
            </li>
            <li>
              Dolor sit amet
            </li>
            <li>
              Consectetur adipiscing elit
            </li>
          </ul>
        </Col>
        <Col xs="4">
          <h5>
            Contact us.
          </h5>
          <ul>
            <li>
              Lorem Ipsum
            </li>
            <li>
              Dolor sit amet
            </li>
            <li>
              Consectetur adipiscing elit
            </li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col offset={{ xs: 8 }}>
          <h5>Created by Chris Snape</h5>
        </Col>
      </Row>
    </Container>
  </Footer>
);

export default FooterComponent;
