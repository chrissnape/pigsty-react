import { render, screen } from '@testing-library/react';
import Error from './index';

const props = {
  label: 'Please input a name',
  isError: true,
}

test('displays label', () => {
  render(<Error {...props} />);
  const label = screen.getByTestId('label');
  expect(label.textContent).toEqual(props.label);
});
