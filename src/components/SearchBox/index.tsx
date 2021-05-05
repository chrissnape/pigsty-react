import { FC, Fragment, MouseEventHandler, useEffect, useState } from 'react';
import {
  Button, FormInput, FormMinMax, FormRadios, FormSelect, Panel,
} from '../';
import { PaymentType, Query, RoomType } from '../../utils/types';
import { ButtonWrapper } from './style';

type Props = {
  onSubmit: Function,
  paymentTypes: Array<PaymentType>,
  query: Query,
  roomTypes: Array<RoomType>,
}

const SearchBoxComponent: FC<Props> = ({
  onSubmit, paymentTypes, query, roomTypes,
}): JSX.Element => {
  const [city, setCity] = useState<string>('');
  const [max, setMax] = useState<string>('');
  const [min, setMin] = useState<string>('');
  const [roomType, setRoomType] = useState<string>('1');
  const [paymentType, setPaymentType] = useState<string | null>(null);
  const [errorMinMax, setErrorMinMax] = useState<boolean>(false);

  useEffect(() => {
    setCity(query.city || '');
    setMax(query.maxPrice ? `${query.maxPrice}` : '');
    setMin(query.minPrice ? `${query.minPrice}` : '');
    setRoomType(query.roomType || '1');
    setPaymentType(query.paymentType);
  }, [query]);

  const parsedMax: number = max.length ? parseInt(max, 10) : 0;
  const parsedMin: number = min.length ? parseInt(min, 10) : 0;

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

  const submit: MouseEventHandler = () => {
    onSubmit({
      city: city.length > 0
        ? city.charAt(0).toUpperCase() + city.slice(1).toLowerCase()
        : null,
      maxPrice: max.length > 0 ? parsedMax : null,
      minPrice: null,
      paymentType,
      roomType: (roomType !== '1') ? roomType : null
    });
  }
  return (
    <Panel>
      <Fragment>
        <FormInput
          isColumn
          label="City"
          onChange={(val: string) => setCity(val)}
          placeholder="London"
          value={city}
        />
        <FormSelect
          isColumn
          label="Room type"
          onChange={setRoomType}
          options={[
            {id: '1', label: 'Any'},
            ...roomTypes.map((rType: RoomType) => ({ id: rType.id, label: rType.name })),
          ]}
          value={roomType}
        />
        <FormMinMax
          errorLabel="Please set a valid price range"
          isColumn
          isError={errorMinMax}
          label="Price range"
          onChangeMax={(val: string) => onChangeMinMax(val, false)}
          onChangeMin={(val: string) => onChangeMinMax(val, true)}
          valueMax={max}
          valueMin={min}
        />
        <FormRadios
          isColumn
          label="Payment type"
          onChange={setPaymentType}
          options={paymentTypes.map((rType: RoomType) => ({ id: rType.id, label: rType.name }))}
          value={paymentType}
        />
        <ButtonWrapper>
          <Button
            label="Clear filter"
            onClick={() => {
              setCity('');
              setMax('');
              setMin('');
              setPaymentType(null);
              setRoomType('1');
            }}
          />
          <Button
            label="Search"
            onClick={submit}
            primary
          />
        </ButtonWrapper>
      </Fragment>
    </Panel>
  );
}

export default SearchBoxComponent;
