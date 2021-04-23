import { fireEvent, render, screen } from '@testing-library/react';
import 'jest-styled-components';
import Button from './index';
import {
  fontColour,
  greyLight,
  primaryColour,
  secondaryColour,
} from '../../utils/styles';

const props = {
  label: "View",
  onClick: jest.fn(),
}

test('renders label', () => {
  render(<Button {...props} />);
  const button = screen.getByTestId('button');
  expect(button.textContent).toEqual(props.label);
});

test('runs onClick when button pressed', () => {
  render(<Button {...props} />);
  fireEvent.click(screen.getByTestId('button'));
  expect(props.onClick).toHaveBeenCalled();
});

test('button has default style', () => {
  const { container: { firstChild } } = render(<Button {...props} />);
  expect(firstChild).toHaveStyleRule('background-color', greyLight);
  expect(firstChild).toHaveStyleRule('color', fontColour);
});

test('button has primary style when primary is true', () => {
  const { container: { firstChild } } = render(<Button {...props} primary/>);
  expect(firstChild).toHaveStyleRule('background-color', primaryColour);
  expect(firstChild).toHaveStyleRule('color', '#fff');
});

test('button has secondary style when secondary is true', () => {
  const { container: { firstChild } } = render(<Button {...props} secondary/>);
  expect(firstChild).toHaveStyleRule('background-color', secondaryColour);
  expect(firstChild).toHaveStyleRule('color', '#fff');
});
