import { FC, Fragment } from 'react';
import { Col, Row } from 'react-grid';
import { Error, Option } from '../';
import {
  ErrorWrapper, FormInput, Label, OptionWrapper,
} from './style';

type OptionType = {
  id: string,
  label: string,
}

type Props = {
  errorLabel?: string,
  isColumn?: boolean,
  isError?: boolean,
  label: string,
  onChange: Function,
  options: Array<OptionType>,
  value: string | null,
}

const FormRadiosComponent: FC<Props> = ({
  errorLabel, isColumn = false, isError = false, label, onChange, options, value,
}): JSX.Element => {
  const labelJSX: JSX.Element = (
    <Label isError={isError} data-testid="label">
      {`${label}:`}
    </Label>
  );
  const optionsJSX: Array<JSX.Element> = (
    options.map((option: OptionType): JSX.Element => {
      const { id, label } = option;
      return (
        <OptionWrapper key={id}>
          <Option
            isChecked={value === id}
            label={label}
            onChange={onChange}
            optionId={id}
          />
        </OptionWrapper>
      );
    })
  );
  return (
    <FormInput>
      {isColumn ? (
        <Fragment>
          {labelJSX}
          {optionsJSX}
        </Fragment>
      ) : (
        <Fragment>
          <Row>
            <Col sm="3">
              {labelJSX}
            </Col>
            <Col sm="9">
              {optionsJSX}
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

export default FormRadiosComponent;
