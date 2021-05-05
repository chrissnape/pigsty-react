import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { getAccomodationSearchResults as getAccomodationSearchResultsAction } from '../../actions';
import { Accomodation } from '../../pages';
import { AppState } from '../../store';
import { Query } from '../../utils/types';

const mapStateToProps = (state: AppState) => {
  const { accomodation } = state;
  return { accomodation };
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getAccomodationSearchResults: (query: Query) => getAccomodationSearchResultsAction(dispatch, query),
});

export default connect(mapStateToProps, mapDispatchToProps)(Accomodation);
