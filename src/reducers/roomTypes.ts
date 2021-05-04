import { AnyAction, Reducer } from 'redux';
import { RoomType } from '../utils/types';
import {
  ROOM_TYPES_GET_REQUEST,
  ROOM_TYPES_GET_SUCCESS,
  ROOM_TYPES_GET_FAILURE,
} from '../actions';

type State = {
  roomTypes: Array<RoomType>,
  roomTypesGetRequest: boolean,
  roomTypesGetSuccess: boolean,
  roomTypesGetFailure: boolean,
};

const initialState: State = {
  roomTypes: [],
  roomTypesGetRequest: false,
  roomTypesGetSuccess: false,
  roomTypesGetFailure: false,
};

const roomTypesReducer: Reducer<State, AnyAction> = (state: State = initialState, action: AnyAction): State => {
  switch (action.type) {
    case ROOM_TYPES_GET_REQUEST:
      return {
        ...state,
        roomTypesGetRequest: true,
        roomTypesGetSuccess: false,
        roomTypesGetFailure: false,
      }
    
    case ROOM_TYPES_GET_SUCCESS:
      return {
        ...state,
        roomTypes: action.roomTypes,
        roomTypesGetRequest: false,
        roomTypesGetSuccess: true,
      }

    case ROOM_TYPES_GET_FAILURE:
      return {
        ...state,
        roomTypesGetRequest: false,
        roomTypesGetFailure: true,
      }

    default:
      return state
  }
};

export default roomTypesReducer;
