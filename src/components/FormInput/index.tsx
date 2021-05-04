import { FC } from 'react';
import { Col, Row } from 'react-grid';
import { Error, Input } from '../';
import { ErrorWrapper, FormInput, Label } from './style';

type Props = {
  isError: boolean,
  label: string,
  errorLabel: string,
  onChange: Function,
  value: string,
}

const FormInputComponent: FC<Props> = ({
  isError, label, errorLabel, onChange, value,
}): JSX.Element => (
  <FormInput>
    <Row>
      <Col sm="2">
        <Label isError={isError} data-testid="label">
          {`${label}:`}
        </Label>
      </Col>
      <Col sm="10">
        <Input onChange={onChange} isError={isError} value={value} />
      </Col>
    </Row>
    <ErrorWrapper>
      <Row>
        <Col offset={{ sm: '2' }}>
          <Error label={errorLabel} isError={isError}/>
        </Col>
      </Row>
    </ErrorWrapper>
  </FormInput>
);

export default FormInputComponent;
