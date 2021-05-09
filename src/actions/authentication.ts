import { Dispatch } from 'redux';
import { Accomodation, LoginCredentials } from '../utils/types';

const url = '/authentication';

export const AUTHENTICATION_REGISTER_POST_REQUEST: string = 'AUTHENTICATION_REGISTER_POST_REQUEST';
export const AUTHENTICATION_REGISTER_POST_SUCCESS: string = 'AUTHENTICATION_REGISTER_POST_SUCCESS';
export const AUTHENTICATION_REGISTER_POST_FAILURE: string = 'AUTHENTICATION_REGISTER_POST_FAILURE';
export const firebaseRegister: Function = (dispatch: Dispatch, credentials: LoginCredentials): void => {
  dispatch({ type: AUTHENTICATION_REGISTER_POST_REQUEST });
  fetch(
    `${url}/authentication/createUser/`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ credentials }),
    }
  )
    .then((res: Response) => res.json())
    .then((results: Array<Accomodation>) => (
      dispatch({
        type: AUTHENTICATION_REGISTER_POST_SUCCESS,
        accomodationSearchResults: results,
      })
    ))
    .catch((error: string) => (
      dispatch({
        type: AUTHENTICATION_REGISTER_POST_FAILURE,
        error,
      })
    ));
};