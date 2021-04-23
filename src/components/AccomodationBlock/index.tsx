import { FC, MouseEventHandler } from 'react';
import { Container, Row, Col } from 'react-grid';
import moment, { Moment } from 'moment';
import { Button, Thumbnail } from '../';
import { DATE } from '../../utils/constants';
import { Image as ImageType, Price } from '../../utils/types';
import * as Style from './style';

type Props = {
  availabileDateString: string,
  city: string,
  images: Array<ImageType>,
  title: string,
  onClick: MouseEventHandler,
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
  availabileDateString, city, images, title, onClick, postcode, price, propertyType, roomType,
}): JSX.Element => {;
  const { amount, billsIncluded, time } = price;
  return (
    <Style.AccomodationBlock>
      <Container fluid styles={{gutterWidth: 0}}>
        <Row noGutters>

        <Col xs={12} md={3}>
          <Style.ThumbnailWrapper>
            <Thumbnail images={images} onClick={onClick} />
          </Style.ThumbnailWrapper>
          </Col>
          <Col xs={12} md={9}>
          <Style.Content>
            <Style.Top>
              <Style.Title data-testid="title">
                {title}
              </Style.Title>
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
              <Button label="View" onClick={onClick} primary data-testid="button"/>
            </Style.Bottom>
          </Style.Content>
          </Col>
        </Row>
      </Container>
    </Style.AccomodationBlock>
  );
}

export default AccomodationBlockComponent;
