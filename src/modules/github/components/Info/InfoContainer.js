import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Info from './Info';

const mapStateToProps = (state) => ({
  info: state.user.info,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Info);
