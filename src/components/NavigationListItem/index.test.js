import { render, screen } from '@testing-library/react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavigationListItem, { getItemLabel } from './index';

const props = {
  label: 'Post Advert',
}

const NavigationListItemJSX = () => (
  <BrowserRouter>
    <Route>
      <NavigationListItem {...props} />
    </Route>
  </BrowserRouter>
);

test ('getItemLabel', () => {
  expect(getItemLabel(props.label)).toEqual('post-advert');
});

test('displays label', () => {
  render(<NavigationListItemJSX />);
  const label = screen.getByTestId('label');
  expect(label.textContent).toEqual(props.label);
});

test('renders link', () => {
  render(<NavigationListItemJSX />);
  const link = screen.getByTestId('link');
  expect(link.href).toEqual(`http://localhost/${getItemLabel(props.label)}`);
});
