import { AnyAction, Reducer } from 'redux';
import { PaymentType } from '../utils/types';
import {
  PAYMENT_TYPES_GET_REQUEST,
  PAYMENT_TYPES_GET_SUCCESS,
  PAYMENT_TYPES_GET_FAILURE,
} from '../actions';

type State = {
  paymentTypes: Array<PaymentType>,
  paymentTypesGetRequest: boolean,
  paymentTypesGetSuccess: boolean,
  paymentTypesGetFailure: boolean,
};

const initialState: State = {
  paymentTypes: [],
  paymentTypesGetRequest: false,
  paymentTypesGetSuccess: false,
  paymentTypesGetFailure: false,
};

const paymentTypesReducer: Reducer<State, AnyAction> = (state: State = initialState, action: AnyAction): State => {
  switch (action.type) {
    case PAYMENT_TYPES_GET_REQUEST:
      return {
        ...state,
        paymentTypesGetRequest: true,
        paymentTypesGetSuccess: false,
        paymentTypesGetFailure: false,
      }
    
    case PAYMENT_TYPES_GET_SUCCESS:
      return {
        ...state,
        paymentTypes: action.paymentTypes,
        paymentTypesGetRequest: false,
        paymentTypesGetSuccess: true,
      }

    case PAYMENT_TYPES_GET_FAILURE:
      return {
        ...state,
        paymentTypesGetRequest: false,
        paymentTypesGetFailure: true,
      }

    default:
      return state
  }
};

export default paymentTypesReducer;
