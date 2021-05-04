import { Dispatch } from 'redux';
import { RoomType } from '../utils/types';

const url = '/roomTypes';

export const ROOM_TYPES_GET_REQUEST: string = 'ROOM_TYPES_GET_REQUEST';
export const ROOM_TYPES_GET_SUCCESS: string = 'ROOM_TYPES_GET_SUCCESS';
export const ROOM_TYPES_GET_FAILURE: string = 'ROOM_TYPES_GET_FAILURE';
export const getAllRoomTypes: Function = (dispatch: Dispatch): void => {
  dispatch({ type: ROOM_TYPES_GET_REQUEST });
  fetch(`${url}/getAllRoomTypes`)
    .then((res: Response) => res.json())
    .then((results: Array<RoomType>) => (
      dispatch({
        type: ROOM_TYPES_GET_SUCCESS,
        roomTypes: results,
      })
    ))
    .catch((error: string) => (
      dispatch({
        type: ROOM_TYPES_GET_FAILURE,
        error,
      })
    ));
};