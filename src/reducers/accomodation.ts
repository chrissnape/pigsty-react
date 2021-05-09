import { AnyAction, Reducer } from 'redux';
import { Accomodation, Query } from '../utils/types';
import {
  ACCOMODATION_INFO_GET,
  ACCOMODATION_SEARCH_QUERY_SET,
  ACCOMODATION_SEARCH_RESULTS_GET_REQUEST,
  ACCOMODATION_SEARCH_RESULTS_GET_SUCCESS,
  ACCOMODATION_SEARCH_RESULTS_GET_FAILURE,
} from '../actions';

type State = {
  accomodation: Accomodation | null,
  accomodationSearchResults: Array<Accomodation>,
  accomodationSearchResultsGetRequest: boolean,
  accomodationSearchResultsGetSuccess: boolean,
  accomodationSearchResultsGetFailure: boolean,
  error: string | null,
  query: Query,
};

const initialState: State = {
  accomodation: null,
  accomodationSearchResults: [],
  accomodationSearchResultsGetRequest: false,
  accomodationSearchResultsGetSuccess: false,
  accomodationSearchResultsGetFailure: false,
  error: null,
  query: {
    city: null,
    maxPrice: null,
    minPrice: null,
    paymentType: null,
    roomType: null,
  },
};

const accomodationReducer: Reducer<State, AnyAction> = (state: State = initialState, action: AnyAction): State => {
  switch (action.type) {
    case ACCOMODATION_INFO_GET:
      return {
        ...state,
        accomodation: state.accomodationSearchResults.find((a: Accomodation) => a.id === action.id) || null,
      }

    case ACCOMODATION_SEARCH_QUERY_SET:
      return {
        ...state,
        query: action.query,
      }

    case ACCOMODATION_SEARCH_RESULTS_GET_REQUEST:
      return {
        ...state,
        accomodationSearchResultsGetRequest: true,
        accomodationSearchResultsGetSuccess: false,
        accomodationSearchResultsGetFailure: false,
      }
    
    case ACCOMODATION_SEARCH_RESULTS_GET_SUCCESS:
      return {
        ...state,
        accomodationSearchResults: action.accomodationSearchResults,
        accomodationSearchResultsGetRequest: false,
        accomodationSearchResultsGetSuccess: true,
      }

    case ACCOMODATION_SEARCH_RESULTS_GET_FAILURE:
      return {
        ...state,
        accomodationSearchResultsGetRequest: false,
        accomodationSearchResultsGetFailure: true,
        error: action.error,
      }

    default:
      return state
  }
};

export default accomodationReducer;
