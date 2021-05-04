import { FC } from 'react';
import { FaExclamationCircle} from 'react-icons/fa';
import { Error, Label } from './style';

type Props = {
  label: string,
  isError: boolean,
}

const ErrorComponent: FC<Props> = ({ label, isError }): JSX.Element | null => (
  isError
    ? (
      <Error data-testid="error">
        <FaExclamationCircle />
        <Label data-testid="label">
          {label}
        </Label>
      </Error>
    )
    : null
);

export default ErrorComponent;
