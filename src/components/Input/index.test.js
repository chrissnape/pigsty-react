import { fireEvent, render, screen } from '@testing-library/react';
import Input from './index';

const props = {
  onChange: jest.fn(),
  placeholder: 'Manchester',
  value: 'London',
}

test('displays value', () => {
  render(<Input {...props} />);
  const input = screen.getByTestId('input');
  expect(input.value).toEqual(props.value);
});

test('displays placeholder', () => {
  render(<Input {...props} />);
  const input = screen.getByTestId('input');
  expect(input.placeholder).toEqual(props.placeholder);
});

test('runs onChange when input changed', () => {
  render(<Input {...props} />);
  fireEvent.change(screen.getByTestId('input'), { target: { value: 'Liverpool' }});
  expect(props.onChange).toHaveBeenCalled();
});
