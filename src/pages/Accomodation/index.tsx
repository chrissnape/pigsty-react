import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Accomodation } from '../../utils/types';

type Props = {
  accomodation: Accomodation | any,
}

const AccomodationScreen: FC<Props> = ({ accomodation }): JSX.Element => {
  const { accomodationId } = useParams<{ accomodationId: string }>();
  return (
    <div>{accomodationId}</div>
  );
}

export default AccomodationScreen;
