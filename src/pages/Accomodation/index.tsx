import { FC } from 'react';
import {
  useParams,
} from "react-router-dom";

type Props = {
}

const ResultsScreen: FC<Props> = ({  }): JSX.Element => {
  const { accomodationId } = useParams<{ accomodationId: string }>();
  return (
    <div>{accomodationId}</div>
  );
}

export default ResultsScreen;
