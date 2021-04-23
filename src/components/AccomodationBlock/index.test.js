import { fireEvent, render, screen } from '@testing-library/react';
import AccomodationBlock from './index';

const props = {
  availabileDateString: '09/04/2020',
  city: 'Manchester',
  country: 'UK',
  images: [{ id: '678', url:'https://ichef.bbci.co.uk/news/320/cpsprodpb/0FCC/production/_118144040_mediaitem118144038.jpg' }],
  title: 'Stylish double room in city centre flat',
  postcode: 'M1 2DQ',
  price: {amount: 500, time: 'pcm', billsIncluded: false},
  propertyType: 'Flat',
  roomType: 'Double room',
}

test('renders title', () => {
  render(<AccomodationBlock {...props} />);
  const title = screen.getByTestId('title');
  expect(title.textContent).toEqual(props.title);
});

test('renders address', () => {
  render(<AccomodationBlock {...props} />);
  const address = screen.getByTestId('address');
  expect(address.textContent).toEqual(`${props.city}, ${props.postcode}`);
});

test('renders type', () => {
  render(<AccomodationBlock {...props} />);
  const type = screen.getByTestId('type');
  expect(type.textContent).toEqual(`${props.roomType} ${props.propertyType}`);
});

test('renders availability date for future', () => {
  Date.now = jest.fn(() => new Date(Date.UTC(2015, 1, 1)).valueOf());
  render(<AccomodationBlock {...props} />);
  const availability = screen.getByTestId('availability');
  expect(availability.textContent).toEqual('Available from 9th Apr');
});

test('renders availability date for present/past', () => {
  Date.now = jest.fn(() => new Date(Date.UTC(2020, 12, 1)).valueOf());
  render(<AccomodationBlock {...props} />);
  const availability = screen.getByTestId('availability');
  expect(availability.textContent).toEqual('Available now!');
});

test('renders pricet', () => {
  render(<AccomodationBlock {...props} />);
  const { amount, time } = props.price;
  expect(screen.getByTestId('price').textContent).toEqual(`£${amount}${time}`);
  expect(screen.getByTestId('bills').textContent).toEqual('not including bills');
});

test('runs onClick when button pressed', () => {
  render(<AccomodationBlock {...props} />);
  fireEvent.click(screen.getByTestId('button'), props.onClick);
});
