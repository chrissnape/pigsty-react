import { FC } from 'react';
import { Container, Row, Col } from 'react-grid';
import { ChildrenWrapper, Page } from './style';

type Props = {
  children: JSX.Element,
}

const PageComponent: FC<Props> = ({children}): JSX.Element => (
  <Page>
    <Container>
      <Row>
        <Col>
          <ChildrenWrapper>
            {children}
          </ChildrenWrapper>
        </Col>
      </Row>
    </Container>
  </Page>
);

export default PageComponent;
