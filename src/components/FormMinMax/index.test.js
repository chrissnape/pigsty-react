import { render, screen } from '@testing-library/react';
import FormMinMax from './index';

const props = {
  isError: false,
  label: 'Price',
  errorLabel: 'Please input valid values',
  onChangeMax: () => {},
  onChangeMin: () => {},
  valueMax:'200',
  valueMin:'100',
}

test('displays label', () => {
  render(<FormMinMax {...props} />);
  const label = screen.getByTestId('label');
  expect(label.textContent).toEqual(`${props.label}:`);
});
