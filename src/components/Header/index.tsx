import { FC, Fragment } from 'react';
import { Container, Row, Col } from 'react-grid';
import { Link } from 'react-router-dom';
import { Button, NavigationDesktop, NavigationMobile } from '..';
import * as Style from './style';

const HeaderComponent: FC<{}> = (): JSX.Element => (
  <Fragment>
    <Style.Desktop>
      <Style.Header data-testid="header">
        <Container>
          <Row>
            <Col xs="4">
              <Link to="" style={{textDecoration: 'none'}}>
                <Style.Logo>
                  Pigsty.
                </Style.Logo>
              </Link>
            </Col>
            <Col xs="8">
              <Style.Right>
                <Button label="Register" secondary url="register"/>
                <Style.ButtonWrapper>
                  <Button label="Log In" url="log-in" />
                </Style.ButtonWrapper>
              </Style.Right>
            </Col>
          </Row>
        </Container>
      </Style.Header>
      <NavigationDesktop />
    </Style.Desktop>
    <Style.Mobile>
      <NavigationMobile />
    </Style.Mobile>
  </Fragment>
);

export default HeaderComponent;
