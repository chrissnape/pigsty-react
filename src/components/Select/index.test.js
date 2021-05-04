import { render, screen } from '@testing-library/react';
import Select from './index';

const props = {
  onChange: jest.fn(),
  value: '456',
  options: [
    {key: '123', label: 'Please select an option'},
    {key: '456', label: 'Foo'},
    {key: '789', label: 'Bar'},
  ],
}

test('renders options', () => {
  render(<Select {...props} />);
  const select = screen.getByTestId('select');
  expect(select.childElementCount).toEqual(props.options.length);
});
