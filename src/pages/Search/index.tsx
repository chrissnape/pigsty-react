import { FC, Fragment, MouseEventHandler, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-grid';
import { useHistory } from 'react-router-dom';
import {
  Button, FormInput, FormMinMax, FormRadios, FormSelect, Panel,
} from '../../components';
import { PaymentType, RoomType } from '../../utils/types';
import { ButtonWrapper, Heading, PanelWrapper } from './style';

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
  const [city, setCity] = useState<string>('');
  const [max, setMax] = useState<string>('');
  const [min, setMin] = useState<string>('');
  const [roomType, setRoomType] = useState<string>('1');
  const [paymentType, setPaymentType] = useState<string | null>(null);
  const [errorCity, setErrorCity] = useState<boolean>(false);
  const [errorMinMax, setErrorMinMax] = useState<boolean>(false);
  const [errorPaymentType, setErrorPaymentType] = useState<boolean>(false);
  
  const history = useHistory();

  useEffect(() => {
    getAllPaymentTypes();
    getAllRoomTypes();
  }, [getAllPaymentTypes, getAllRoomTypes]);

  const parsedMax: number = max.length ? parseInt(max, 10) : 0;
  const parsedMin: number = min.length ? parseInt(min, 10) : 0;

  const onChangeCity: Function = (value: string): void => {
    if (value.length > 0) {
      setErrorCity(false);
    } else {
      setErrorCity(true);
    }
    setCity(value);
  }
  
  const onChangeMinMax: Function = (value: string, isMin: boolean): void => {
    const parsedVal: number = value.length > 0 ? parseInt(value, 10) : 0;
    if (isMin) {
      if (max.length > 0) {
        if (parsedVal <= parsedMax && parsedVal > 0) {
          setErrorMinMax(false);
        } else {
          setErrorMinMax(true);
        }
      }
      setMin(value);
    } else {
      if (min.length > 0) {
        if (parsedVal >= parsedMin) {
          setErrorMinMax(false);
        } else {
          setErrorMinMax(true);
        }
      }
      setMax(value);
    }
  }

  const roomTypesOptions: Array<OptionType> = [
    {id: '1', label: 'Any'},
    ...roomTypes.map((rType: RoomType) => ({ id: rType.id, label: rType.name })),
  ];
  const roomTypeOption: OptionType | undefined = roomTypesOptions.find((option: OptionType) => option.id === roomType);
  const roomTypeId: string = roomTypeOption ? roomTypeOption.id : roomTypesOptions[0].id;

  const paymentTypesOptions: Array<OptionType> = (
    paymentTypes.map((pType: PaymentType) => ({ id: pType.id, label: pType.name }))
  );
  const paymentTypeOption: OptionType | undefined = paymentTypesOptions.find((option: OptionType) => option.id === paymentType);
  const paymentTypeId: string = paymentTypeOption ? paymentTypeOption.id : roomTypesOptions[0].id;

  const validate: MouseEventHandler = (): void => {
    const cityValid: boolean = city.length > 0;
    const minMaxValid: boolean = (
      max.length > 0 && min.length > 0 && parsedMax >= 1 && parsedMin >= 0 && parsedMax >= parsedMin
    );
    const paymentTypeValid: boolean = paymentType !== null;
    if (!cityValid) setErrorCity(true);
    if (!minMaxValid) setErrorMinMax(true);
    if (!paymentTypeValid) setErrorPaymentType(true);
    if (cityValid && minMaxValid && paymentTypeValid) {
      setAccomodationSearchQuery({
        city,
        maxPrice: parsedMax,
        minPrice: parsedMin,
        paymentType,
        roomType: (roomType !== '1') ? roomType : null,
      });
      history.push('/results');
    }
  }

  return (
    <Container>
      <Row>
        <Col>
          <Heading>
            Find a room.
          </Heading>
        </Col>
      </Row>
      <Row>
        <Col md="8" order={{ xs: 'last', md: 'first' }}>
          <FormInput
            errorLabel="Please input a city name"
            isError={errorCity}
            label="City"
            onChange={onChangeCity}
            value={city}
          />
          <FormSelect
            label="Room Type"
            onChange={setRoomType}
            options={roomTypesOptions}
            value={roomTypeId}
          />
          <FormMinMax
            errorLabel="Please set a valid price range"
            isError={errorMinMax}
            label="Price range"
            onChangeMax={(val: string) => onChangeMinMax(val, false)}
            onChangeMin={(val: string) => onChangeMinMax(val, true)}
            valueMax={max}
            valueMin={min}
          />
          <FormRadios
            errorLabel="Please select a payment type"
            isError={errorPaymentType}
            label="Payment type"
            onChange={(id: string) => {
              setErrorPaymentType(false);
              setPaymentType(id);
            }}
            options={paymentTypesOptions}
            value={paymentTypeId}
          />
          <Row>
            <Col>
              <ButtonWrapper>
                <Button label="Search" primary onClick={validate}/>
              </ButtonWrapper>
            </Col>
          </Row>
        </Col>
        <Col md="4" order={{ xs: 'first', md: 'last' }}>
          <PanelWrapper>
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
          </PanelWrapper>
        </Col>
      </Row>
    </ Container>
  );
}

export default AccomodationScreen;
