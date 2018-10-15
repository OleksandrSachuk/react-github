import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { compose, withState, withHandlers } from 'recompose';

import {searchUserByName} from '../../actions';
import GitHub from './GitHub';

const mapStateToProps = (state) => ({
  info: state.user.info,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  searchUserByName,
}, dispatch);

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),

  withState('nameValue', 'setNameValue', ''),

  withHandlers({
    handleNameValueChange: ({ setNameValue }) => (e) => {
      setNameValue(e.target.value);
    },

    handleFormSubmit: ({
                         nameValue,
                         searchUserByName,
                       }) => (e) => {
      e.preventDefault();
      searchUserByName(nameValue);
    },
  }),
)(GitHub);
