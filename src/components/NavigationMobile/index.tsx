import { FC, useState } from 'react';
import { Container, Row, Col } from 'react-grid';
import { FaBars } from 'react-icons/fa';
import { NavigationListItem } from '..';
import * as Style from './style';

const NavigationComponent: FC<{}> = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleIsOpen = () => setIsOpen(!isOpen);
  return (
    <Style.Navigation data-testid="navigation">
      <Container>
        <Row>
          <Col xs={4}>
            <Style.Logo>Pigsty.</Style.Logo>
          </Col>
          <Col xs={8} style={{display: 'flex', justifyContent: 'flex-end'}}>
            <Style.BurgerIcon onClick={toggleIsOpen}>
              <FaBars />
            </Style.BurgerIcon>
          </Col>
        </Row>
      </Container>
      {isOpen && (
        <Style.Underlay>
          <Style.MenuList>
            {['Search', 'Post Advert', 'My Adverts'].map((label: string) => (
              <NavigationListItem label={label} onClick={toggleIsOpen} isMobile />
            ))}
            <NavigationListItem label="Register" onClick={toggleIsOpen} secondary isMobile />
            <NavigationListItem label="Log In" onClick={toggleIsOpen} secondary isMobile/>
          </Style.MenuList>
        </Style.Underlay>
      )}
    </Style.Navigation>
  );
}

export default NavigationComponent;
