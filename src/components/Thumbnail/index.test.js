import { fireEvent, render, screen } from '@testing-library/react';
import Thumbnail from './index';

const props = {
  images: [
    {
      id: '123',
      url:'https://ichef.bbci.co.uk/news/320/cpsprodpb/0FCC/production/_118144040_mediaitem118144038.jpg',
    }, {
      id: '456',
      url:'https://ichef.bbci.co.uk/news/976/cpsprodpb/B4BA/production/_118166264_microsoftteams-image.png',
    },
  ],
  onClick: jest.fn(),
};

test('renders image', () => {
  render(<Thumbnail {...props} />);
  expect(screen.getByTestId('image').src).toEqual(props.images[0].url);
});

test('renders number', () => {
  render(<Thumbnail {...props} />);
  expect(screen.getByTestId('number').textContent).toEqual(`${props.images.length}`);
});

test('renders placeholder when no images', () => {
  render(<Thumbnail {...props} images={[]} />);
  expect(screen.getByTestId('placeholder')).toBeInTheDocument();
});

test('runs onClick when thumbnail pressed', () => {
  render(<Thumbnail {...props} />);
  fireEvent.click(screen.getByTestId('thumbnail'));
  expect(props.onClick).toHaveBeenCalled();
});
