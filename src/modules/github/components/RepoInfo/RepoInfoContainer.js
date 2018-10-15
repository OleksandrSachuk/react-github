import { connect } from 'react-redux';

import RepoInfo from './RepoInfo';

const mapStateToProps = (state) => ({
  repoInfo: state.user.repoInfo,
});

export default connect(
  mapStateToProps,
)(RepoInfo);

