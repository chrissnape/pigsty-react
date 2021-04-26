import { render, screen } from '@testing-library/react';
import { BrowserRouter, Route } from 'react-router-dom';
import AccomodationBlock from './index';

const props = {
  id: '12345',
  availabileDateString: '09/04/2020',
  city: 'Manchester',
  country: 'UK',
  images: [{ id: '67890', url:'https://ichef.bbci.co.uk/news/320/cpsprodpb/0FCC/production/_118144040_mediaitem118144038.jpg' }],
  title: 'Stylish double room in city centre flat',
  postcode: 'M1 2DQ',
  price: {amount: 500, time: 'pcm', billsIncluded: false},
  propertyType: 'Flat',
  roomType: 'Double room',
}

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useRouteMatch: () => ({ url: '/results' }),
}));

const AccomodationBlockJSX = () => (
  <BrowserRouter>
    <Route>
      <AccomodationBlock {...props} />
    </Route>
  </BrowserRouter>
);

test('renders title', () => {
  render(<AccomodationBlockJSX />);
  const title = screen.getByTestId('title');
  expect(title.textContent).toEqual(props.title);
});

test('renders address', () => {
  render(<AccomodationBlockJSX />);
  const address = screen.getByTestId('address');
  expect(address.textContent).toEqual(`${props.city}, ${props.postcode}`);
});

test('renders type', () => {
  render(<AccomodationBlockJSX />);
  const type = screen.getByTestId('type');
  expect(type.textContent).toEqual(`${props.roomType} ${props.propertyType}`);
});

test('renders availability date for future', () => {
  Date.now = jest.fn(() => new Date(Date.UTC(2015, 1, 1)).valueOf());
  render(<AccomodationBlockJSX />);
  const availability = screen.getByTestId('availability');
  expect(availability.textContent).toEqual('Available from 9th Apr');
});

test('renders availability date for present/past', () => {
  Date.now = jest.fn(() => new Date(Date.UTC(2020, 12, 1)).valueOf());
  render(<AccomodationBlockJSX />);
  const availability = screen.getByTestId('availability');
  expect(availability.textContent).toEqual('Available now!');
});

test('renders price', () => {
  render(<AccomodationBlockJSX />);
  const { amount, time } = props.price;
  expect(screen.getByTestId('price').textContent).toEqual(`£${amount}${time}`);
  expect(screen.getByTestId('bills').textContent).toEqual('not including bills');
});

test('renders link', () => {
  render(<AccomodationBlockJSX />);
  const url = `http://localhost/results/${props.id}`;
  expect(screen.getByTestId('link-thumbnail').href).toEqual(url);
  expect(screen.getByTestId('link-title').href).toEqual(url);
});
