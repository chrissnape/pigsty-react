import { Dispatch } from 'redux';
import { Accomodation, Query } from '../utils/types';

const url = '/accomodation';

function objToQueryString(query: Object) {
  let queryString: string = '';
  for (let i = 0; i < Object.keys(query).length; i += 1) {
    queryString += `${encodeURIComponent(Object.keys(query)[i])}=${encodeURIComponent(Object.values(query)[i])}&`;
  }
  return `?${queryString}`;
}

export const ACCOMODATION_SEARCH_RESULTS_GET_REQUEST: string = 'ACCOMODATION_SEARCH_RESULTS_GET_REQUEST';
export const ACCOMODATION_SEARCH_RESULTS_GET_SUCCESS: string = 'ACCOMODATION_SEARCH_RESULTS_GET_SUCCESS';
export const ACCOMODATION_SEARCH_RESULTS_GET_FAILURE: string = 'ACCOMODATION_SEARCH_RESULTS_GET_FAILURE';
export const getAccomodationSearchResults: Function = ( dispatch: Dispatch, query: Query ): void => {
  dispatch({ type: ACCOMODATION_SEARCH_RESULTS_GET_REQUEST, query });
  fetch(`${url}/getAllAccomodation${objToQueryString(query)}`)
    .then((res: Response) => res.json())
    .then((results: Array<Accomodation>) => (
      dispatch({
        type: ACCOMODATION_SEARCH_RESULTS_GET_SUCCESS,
        accomodationSearchResults: results,
      })
    ))
    .catch((error: string) => (
      dispatch({
        type: ACCOMODATION_SEARCH_RESULTS_GET_FAILURE,
        error,
      })
    ));
};

export const ACCOMODATION_INFO_GET: string = 'ACCOMODATION_INFO_GET';
export const getAccomodationInfo: Function = (dispatch: Dispatch, id: string): void => {
  dispatch({ type: ACCOMODATION_INFO_GET, accomodationId: id });
};
