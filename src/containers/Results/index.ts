import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Results } from '../../pages';
import { AppState } from '../../store';
import { getAccomodationSearchResults as getAccomodationSearchResultsAction } from '../../actions';

const mapStateToProps = (state: AppState) => {
  const { accomodation } = state;
  return { ...accomodation };
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getAccomodationSearchResults: (query: Object) => getAccomodationSearchResultsAction(dispatch, query),
});

export default connect(mapStateToProps, mapDispatchToProps)(Results);
