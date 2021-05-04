import { FC } from 'react';
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
  isError: boolean,
  label: string,
  errorLabel: string,
  onChange: Function,
  options: Array<OptionType>,
  value: string,
}

const FormRadiosComponent: FC<Props> = ({
  isError, label, errorLabel, onChange, options, value,
}): JSX.Element => (
  <FormInput>
    <Row>
      <Col sm="2">
        <Label isError={isError} data-testid="label">
          {`${label}:`}
        </Label>
      </Col>
      <Col sm="10">
        {options.map((option: OptionType): JSX.Element => {
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
        })}
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

export default FormRadiosComponent;
