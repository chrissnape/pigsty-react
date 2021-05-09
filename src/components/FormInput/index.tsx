import { FC, Fragment } from 'react';
import { Col, Row } from 'react-grid';
import { Error, Input } from '../';
import { ErrorWrapper, FormInput, Label } from './style';

type Props = {
  errorLabel?: string,
  isColumn?: boolean,
  isError?: boolean,
  label: string,
  onChange: Function,
  placeholder?: string,
  value: string,
}

const FormInputComponent: FC<Props> = ({
  errorLabel, isColumn = false, isError = false, label, onChange, placeholder, value,
}): JSX.Element => {
  const labelJSX: JSX.Element = (
    <Label isError={isError} data-testid="label">
      {`${label}:`}
    </Label>
  );
  const inputJSX: JSX.Element = (
    <Input
      onChange={onChange}
      isError={isError}
      placeholder={placeholder}
      value={value}
    />
  );
  return (
    <FormInput>
      {isColumn ? (
        <Fragment>
          {labelJSX}
          {inputJSX}
          {errorLabel && (
            <ErrorWrapper>
              <Error label={errorLabel} isError={isError}/>
            </ErrorWrapper>
          )}
        </Fragment>
      ) : (
        <Fragment>
          <Row>
            <Col sm="3">
              {labelJSX}
            </Col>
            <Col sm="9">
              {inputJSX}
            </Col>
          </Row>
          {(errorLabel && isError) && (
            <ErrorWrapper>
              <Row>
                <Col offset={{ sm: '3' }}>
                  <Error label={errorLabel} isError={isError}/>
                </Col>
              </Row>
            </ErrorWrapper>
          )}
        </Fragment>
      )}
    </FormInput>
  );
}

export default FormInputComponent;
