import { FC, Fragment, MouseEventHandler, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-grid';
import { useHistory } from 'react-router-dom';
import {
  Button, FormInput, FormRadios, Panel,
} from '../../components';
import { PaymentType, RoomType } from '../../utils/types';
import { ButtonWrapper, Heading } from './style';

type Props = {
  getAllPaymentTypes: Function,
  getAllRoomTypes: Function,
  paymentTypes: Array<PaymentType>,
  roomTypes: Array<RoomType>,
  setAccomodationSearchQuery: Function,
}

type OptionType = {
  id: string,
  label: string,
}

const AccomodationScreen: FC<Props> = ({
  getAllPaymentTypes, getAllRoomTypes, paymentTypes, roomTypes, setAccomodationSearchQuery,
}): JSX.Element => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [gender, setGender] = useState<string | null>(null);
  const [emailAddress, setEmailAddress] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const [errorCity, setErrorCity] = useState<boolean>(false);
  const [errorMinMax, setErrorMinMax] = useState<boolean>(false);
  const [errorPaymentType, setErrorPaymentType] = useState<boolean>(false);
  
  const history = useHistory();

  useEffect(() => {
    getAllPaymentTypes();
    getAllRoomTypes();
  }, [getAllPaymentTypes, getAllRoomTypes]);

  // const onChangeCity: Function = (value: string): void => {
  //   if (value.length > 0) {
  //     setErrorCity(false);
  //   } else {
  //     setErrorCity(true);
  //   }
  //   setCity(value);
  // }

  const genderOptions: Array<OptionType> = [
    {id: 'M', label: 'Male'},
    {id: 'F', label: 'Female'},
    {id: 'X', label: 'Other'},
  ]
  const paymentTypeOption: OptionType | undefined = genderOptions.find((option: OptionType) => option.id === gender);
  const genderId: string | null = paymentTypeOption ? paymentTypeOption.id : null;

  // const validate: MouseEventHandler = (): void => {
  //   const cityValid: boolean = city.length > 0;
  //   const minMaxValid: boolean = (
  //     max.length > 0 && min.length > 0 && parsedMax >= 1 && parsedMin >= 0 && parsedMax >= parsedMin
  //   );
  //   const paymentTypeValid: boolean = paymentType !== null;
  //   if (!cityValid) setErrorCity(true);
  //   if (!minMaxValid) setErrorMinMax(true);
  //   if (!paymentTypeValid) setErrorPaymentType(true);
  //   if (cityValid && minMaxValid && paymentTypeValid) {
  //     setAccomodationSearchQuery({
  //       city,
  //       maxPrice: parsedMax,
  //       minPrice: parsedMin,
  //       paymentType,
  //       roomType: (roomType !== '1') ? roomType : null,
  //     });
  //     history.push('/results');
  //   }
  // }

  const validate: MouseEventHandler = (): void => {

  }

  return (
    <Container>
      <Row>
        <Col>
          <Heading>
            Register.
          </Heading>
        </Col>
      </Row>
      <Row>
        <Col md="8">
          <FormInput
            errorLabel="Please input your first name"
            isError={errorCity}
            label="First name"
            onChange={setFirstName}
            value={firstName}
          />
          <FormInput
            errorLabel="Please input your last name"
            isError={errorCity}
            label="Last name"
            onChange={setLastName}
            value={lastName}
          />
          <FormRadios
            errorLabel="Please select a gender"
            isError={errorPaymentType}
            label="Gender"
            onChange={(id: string) => {
              // setErrorPaymentType(false);
              // setPaymentType(id);
            }}
            options={genderOptions}
            value={genderId}
          />
          <FormInput
            errorLabel="Please input your email address"
            isError={errorCity}
            label="Email address"
            onChange={setEmailAddress}
            value={emailAddress}
          />
          <FormInput
            errorLabel="Please input a password"
            isError={errorCity}
            label="Password"
            onChange={setPassword}
            value={password}
          />
          <FormInput
            errorLabel="Please confirm your password is correct"
            isError={errorCity}
            label="Confirm Password"
            onChange={setConfirmPassword}
            value={confirmPassword}
          />
          <Row>
            <Col>
              Passwords must contain at least 6 characters, including uppercase, lowercase, numbers and special character.
            </Col>
          </Row>
          <Row>
            <Col>
              <ButtonWrapper>
                <Button label="Register" primary onClick={validate}/>
              </ButtonWrapper>
            </Col>
          </Row>
        </Col>
        <Col md="4">
          <Panel>
            <Fragment>
              <div>Need help?</div>
              <ul>
                <li>
                  Foo
                </li>
                <li>
                  Bar
                </li>
              </ul>
            </Fragment>
          </Panel>
        </Col>
      </Row>
    </ Container>
  );
}

export default AccomodationScreen;
