import { FC } from 'react';
import { Col, Row } from 'react-grid';
import { Error, Select } from '../';
import { ErrorWrapper, FormSelect, Label } from './style';

type Props = {
  isError: boolean,
  label: string,
  errorLabel: string,
  onChange: Function,
  options: Array<{
    id: string,
    label: string,
  }>,
  value: string,
}

const FormSelectComponent: FC<Props> = ({
  isError, label, errorLabel, onChange, options, value,
}): JSX.Element => (
  <FormSelect>
    <Row>
      <Col sm="2">
        <Label isError={isError} data-testid="label">
          {`${label}:`}
        </Label>
      </Col>
      <Col sm="10">
        <Select
          isError={isError}
          onChange={onChange}
          options={options}
          value={value}
        />
      </Col>
    </Row>
    <ErrorWrapper>
      <Row>
        <Col offset={{ sm: '2' }}>
          <Error label={errorLabel} isError={isError}/>
        </Col>
      </Row>
    </ErrorWrapper>
  </FormSelect>
);

export default FormSelectComponent;
