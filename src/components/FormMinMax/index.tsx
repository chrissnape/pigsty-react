import { FC, Fragment } from 'react';
import { Col, Row } from 'react-grid';
import { Error, Input } from '../';
import {
  ErrorWrapper, FormMinMax, InputRowWrapper, InputWrapper, Label,
} from './style';

type Props = {
  errorLabel?: string,
  isColumn?: boolean,
  isError?: boolean,
  label: string,
  onChangeMax: Function,
  onChangeMin: Function,
  valueMax: string,
  valueMin: string,
}

const FormMinMaxComponent: FC<Props> = ({
  errorLabel, isColumn = false, isError = false, label, onChangeMax, onChangeMin, valueMax, valueMin,
}): JSX.Element => {
  const labelJSX: JSX.Element = (
    <Label isError={isError} data-testid="label">
      {`${label}:`}
    </Label>
  );
  const inputMaxJSX: JSX.Element = (
    <Input
      isError={isError}
      min="0"
      onChange={onChangeMax}
      placeholder="max"
      type="number"
      value={valueMax}
    />
  );
  const inputMinJSX: JSX.Element = (
    <Input
      isError={isError}
      min="0"
      onChange={onChangeMin}
      placeholder="min"
      type="number"
      value={valueMin}
    />
  );
  return (
    <FormMinMax>
      {isColumn ? (
        <Fragment>
          {labelJSX}
          <InputRowWrapper>
            <InputWrapper>
              {inputMinJSX}
            </InputWrapper>
            <InputWrapper>
              {inputMaxJSX}
            </InputWrapper>
          </InputRowWrapper>
          {errorLabel && (
            <ErrorWrapper>
              <Error label={errorLabel} isError={isError}/>
            </ErrorWrapper>
          )}
        </Fragment>
      ) : (
        <Fragment>
          <Row>
            <Col sm="2">
              {labelJSX}
            </Col>
            <Col sm="5">
              {inputMinJSX}
            </Col>
            <Col sm="5">
              {inputMaxJSX}
            </Col>
          </Row>
          {(errorLabel && isError) && (
            <ErrorWrapper>
              <Row>
                <Col offset={{ sm: '2' }}>
                  <Error label={errorLabel} isError={isError}/>
                </Col>
              </Row>
            </ErrorWrapper>
          )}
        </Fragment>
      )}
    </FormMinMax>
  );
}

export default FormMinMaxComponent;
