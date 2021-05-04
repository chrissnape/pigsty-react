import { render, screen } from '@testing-library/react';
import Option from './index';

const props = {
  isChecked: false,
  label: 'Foo',
  onChange: () => {},
  optionId: '1',
}

test('displays label', () => {
  render(<Option {...props} />);
  const label = screen.getByTestId('option-label');
  expect(label.textContent).toEqual(props.label);
});
