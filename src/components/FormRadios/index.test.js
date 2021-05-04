import { render, screen } from '@testing-library/react';
import FormInput from './index';

const props = {
  isError: false,
  label: 'Gender',
  errorLabel: 'Please select a gender',
  onChange: () => {},
  options: [
    {key: '0', label: 'Foo'},
    {key: '1', label: 'Bar'},
  ],
  value: '1',
}

test('displays label', () => {
  render(<FormInput {...props} />);
  const label = screen.getByTestId('label');
  expect(label.textContent).toEqual(`${props.label}:`);
});
