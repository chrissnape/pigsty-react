import { FC } from 'react';
import { Col, Row } from 'react-grid';
import { Error, Input } from '../';
import { ErrorWrapper, FormMinMax, Label } from './style';

type Props = {
  isError: boolean,
  label: string,
  errorLabel: string,
  onChangeMax: Function,
  onChangeMin: Function,
  valueMax: string,
  valueMin: string,
}

const FormMinMaxComponent: FC<Props> = ({
  isError, label, errorLabel, onChangeMax, onChangeMin, valueMax, valueMin,
}): JSX.Element => (
  <FormMinMax>
    <Row>
      <Col sm="2">
        <Label isError={isError} data-testid="label">
          {`${label}:`}
        </Label>
      </Col>
      <Col sm="5">
        <Input
          isError={isError}
          min="0"
          onChange={onChangeMin}
          placeholder="min"
          type="number"
          value={valueMin}
        />
      </Col>
      <Col sm="5">
        <Input
          isError={isError}
          min="0"
          onChange={onChangeMax}
          placeholder="max"
          type="number"
          value={valueMax}
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
  </FormMinMax>
);

export default FormMinMaxComponent;
