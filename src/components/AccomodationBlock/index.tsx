import { FC } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { Container, Row, Col } from 'react-grid';
import moment, { Moment } from 'moment';
import { Button, Thumbnail } from '../';
import { DATE } from '../../utils/constants';
import { Image as ImageType, Price } from '../../utils/types';
import * as Style from './style';

type Props = {
  id: string,
  availabileDateString: string,
  city: string,
  images: Array<ImageType>,
  title: string,
  postcode: string,
  price: Price,
  propertyType: string,
  roomType: string,
}

const getAvailability: Function = (dateString: string): JSX.Element => {
  const date: Moment = moment(dateString, DATE);
  const avString: JSX.Element = (date.isSameOrBefore(moment()))
    ? <Style.Availability>now!</Style.Availability>
    : <>from <Style.Availability>{date.format('Do MMM')}</Style.Availability></>;
  return <span data-testid="availability">Available {avString}</span>;
}

const AccomodationBlockComponent: FC<Props> = ({
  id, availabileDateString, city, images, title, postcode, price, propertyType, roomType,
}): JSX.Element => {
  const { amount, billsIncluded, time } = price;
  const match = useRouteMatch();
  return (
    <Style.AccomodationBlock>
      <Container fluid styles={{gutterWidth: 0}}>
        <Row noGutters>
          <Col xs={12} md={5}>
            <Link to={`${match.url}/${id}`} data-testid="link-thumbnail">
              <Style.ThumbnailWrapper>
                <Thumbnail images={images} />
              </Style.ThumbnailWrapper>
            </Link>
          </Col>
          <Col xs={12} md={7}>
          <Style.Content>
            <Style.Top>
              <Link style={{textDecoration: 'none'}} to={`${match.url}/${id}`} data-testid="link-title">
                <Style.Title data-testid="title">
                  {title}
                </Style.Title>
              </Link>
              <Style.SubTitle>
                <Style.Type data-testid="type">
                  {`${roomType} ${propertyType}`}
                </Style.Type>
                {getAvailability(availabileDateString)}
              </Style.SubTitle>
              <div data-testid="address">
                {`${city}, ${postcode}`}
              </div>
            </Style.Top>
            <Style.Bottom>
              <Style.Price>
                <Style.Amount data-testid="price">
                  {`£${amount}${time}`}
                </Style.Amount>
                <Style.Bills data-testid="bills">
                  {billsIncluded ? 'including bills' : 'not including bills'}
                </Style.Bills>
              </Style.Price>
              <Button label="View" primary url={`${match.url}/${id}`}/>
            </Style.Bottom>
          </Style.Content>
          </Col>
        </Row>
      </Container>
    </Style.AccomodationBlock>
  );
}

export default AccomodationBlockComponent;
