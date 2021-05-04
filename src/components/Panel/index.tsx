import { FC } from 'react';
import { Panel } from './style';

type Props = {
  children: JSX.Element,
}

const PanelComponent: FC<Props> = ({ children }): JSX.Element => (
  <Panel>
    {children}
  </Panel>
);

export default PanelComponent;
