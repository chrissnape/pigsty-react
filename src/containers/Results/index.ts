import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import {
  getAccomodationSearchResults as getAccomodationSearchResultsAction,
  getAllPaymentTypes as getAllPaymentTypesAction,
  getAllRoomTypes as getAllRoomTypesAction,
} from '../../actions';
import { Results } from '../../pages';
import { AppState } from '../../store';
import { Query } from '../../utils/types';

const mapStateToProps = (state: AppState) => {
  const { accomodation, paymentTypes, roomTypes } = state;
  return { ...accomodation, ...paymentTypes, ...roomTypes };
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getAccomodationSearchResults: (query: Query) => getAccomodationSearchResultsAction(dispatch, query),
  getAllPaymentTypes: () => getAllPaymentTypesAction(dispatch),
  getAllRoomTypes: () => getAllRoomTypesAction(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Results);
