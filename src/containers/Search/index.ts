import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import {
  getAllPaymentTypes as getAllPaymentTypesAction,
  getAllRoomTypes as getAllRoomTypesAction,
  setAccomodationSearchQuery as setAccomodationSearchQueryAction,
} from '../../actions';
import { Search } from '../../pages';
import { AppState } from '../../store';
import { Query } from '../../utils/types';

const mapStateToProps = (state: AppState) => {
  const { paymentTypes, roomTypes } = state;
  return { ...paymentTypes, ...roomTypes };
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getAllPaymentTypes: () => getAllPaymentTypesAction(dispatch),
  getAllRoomTypes: () => getAllRoomTypesAction(dispatch),
  setAccomodationSearchQuery: (query: Query) => setAccomodationSearchQueryAction(dispatch, query),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
