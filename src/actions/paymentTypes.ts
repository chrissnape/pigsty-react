import { Dispatch } from 'redux';
import { PaymentType } from '../utils/types';

const url = '/paymentTypes';

export const PAYMENT_TYPES_GET_REQUEST: string = 'PAYMENT_TYPES_GET_REQUEST';
export const PAYMENT_TYPES_GET_SUCCESS: string = 'PAYMENT_TYPES_GET_SUCCESS';
export const PAYMENT_TYPES_GET_FAILURE: string = 'PAYMENT_TYPES_GET_FAILURE';
export const getAllPaymentTypes: Function = (dispatch: Dispatch): void => {
  dispatch({ type: PAYMENT_TYPES_GET_REQUEST });
  fetch(`${url}/getAllPaymentTypes`)
    .then((res: Response) => res.json())
    .then((results: Array<PaymentType>) => (
      dispatch({
        type: PAYMENT_TYPES_GET_SUCCESS,
        paymentTypes: results,
      })
    ))
    .catch((error: string) => (
      dispatch({
        type: PAYMENT_TYPES_GET_FAILURE,
        error,
      })
    ));
};