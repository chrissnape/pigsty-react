import { FC } from 'react';
import { Page } from './style';

type Props = {
  children: JSX.Element,
}

const PageComponent: FC<Props> = ({children}): JSX.Element => (
  <Page>
    {children}
  </Page>
);

export default PageComponent;
