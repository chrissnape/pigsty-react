import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Search } from '../../pages';
import { AppState } from '../../store';
import {
  getAccomodationSearchResults as getAccomodationSearchResultsAction,
  getAllPaymentTypes as getAllPaymentTypesAction,
  getAllRoomTypes as getAllRoomTypesAction,
} from '../../actions';

const mapStateToProps = (state: AppState) => {
  const { paymentTypes, roomTypes } = state;
  return { ...paymentTypes, ...roomTypes };
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getAccomodationSearchResults: (query: Object) => getAccomodationSearchResultsAction(dispatch, query),
  getAllPaymentTypes: () => getAllPaymentTypesAction(dispatch),
  getAllRoomTypes: () => getAllRoomTypesAction(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
