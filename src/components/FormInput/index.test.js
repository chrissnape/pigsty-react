import { render, screen } from '@testing-library/react';
import FormInput from './index';

const props = {
  isError: false,
  label: 'City',
  errorLabel: 'Please input a city',
  onChange: () => {},
  value: 'London',
}

test('displays label', () => {
  render(<FormInput {...props} />);
  const label = screen.getByTestId('label');
  expect(label.textContent).toEqual(`${props.label}:`);
});
