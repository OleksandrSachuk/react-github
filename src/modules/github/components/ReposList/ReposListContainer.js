import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { compose, withState, withHandlers } from 'recompose';

import ReposList from './ReposList';
import {selectRepo} from '../../actions';

const mapStateToProps = (state) => ({
  repos: state.user.repos,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  selectRepo,
}, dispatch);

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),

  withState('selectedRepoId', 'setSelectedRepoId', null),

  withHandlers({
    handleSelectRepo: ({ setSelectedRepoId, selectRepo }) => (id) => {
      setSelectedRepoId(id);
      selectRepo(id);
    },
  }),

)(ReposList);

