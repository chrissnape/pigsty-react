import { FC, Fragment } from 'react';
import { Col, Row } from 'react-grid';
import { Error, Select } from '../';
import { ErrorWrapper, FormSelect, Label } from './style';

type Props = {
  errorLabel?: string,
  isColumn?: boolean,
  isError?: boolean,
  label: string,
  onChange: Function,
  options: Array<{
    id: string,
    label: string,
  }>,
  value: string,
}

const FormSelectComponent: FC<Props> = ({
  errorLabel, isColumn = false, isError = false, label, onChange, options, value,
}): JSX.Element => {
  const labelJSX: JSX.Element = (
    <Label isError={isError} data-testid="label">
      {`${label}:`}
    </Label>
  );
  const selectJSX: JSX.Element = (
    <Select
      isError={isError}
      onChange={onChange}
      options={options}
      value={value}
    />
  );
  return (
    <FormSelect>
      {isColumn ? (
        <Fragment>
          {labelJSX}
          {selectJSX}
        </Fragment>
      ) : (
        <Fragment>
          <Row>
            <Col sm="2">
              {labelJSX}
            </Col>
            <Col sm="10">
              {selectJSX}
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
    </FormSelect>
  );
}

export default FormSelectComponent;
