import { render, screen } from '@testing-library/react';
import FormSelect from './index';

const props = {
  isError: false,
  label: 'Room Type',
  errorLabel: 'Please select a room type',
  onChange: () => {},
  options: [
    {key: '0', label: 'Foo'},
    {key: '1', label: 'Bar'},
  ],
  value: '1',
}

test('displays label', () => {
  render(<FormSelect {...props} />);
  const label = screen.getByTestId('label');
  expect(label.textContent).toEqual(`${props.label}:`);
});
