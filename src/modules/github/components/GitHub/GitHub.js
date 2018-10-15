import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles';
import Info from '../Info';
import UserRepos from '../ReposList';
import RepoInfo from '../RepoInfo';

const propTypes = {
  handleNameValueChange: PropTypes.func.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
};

const styles = (theme) => ({
  button: {
    margin: '25px',
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },

  root: {
    width: '50%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
});

const GitHub = ({
                  classes,
                  handleNameValueChange,
                  handleFormSubmit,
                }) =>
  (
    <div>
      <form noValidate autoComplete="off" onSubmit={ handleFormSubmit }>
        <TextField
          id="filled-search"
          label="Search by name"
          type="search"
          margin="normal"
          variant="filled"
          onChange={ handleNameValueChange }
        />
        <Button
          variant="contained"
          color="primary"
          className={ classes.button }
          onClick={ handleFormSubmit }
        >
          Send
          <Icon className={ classes.rightIcon }>send</Icon>
        </Button>
      </form>

      <Info/>
      <UserRepos/>
      <RepoInfo/>
    </div>
  );

GitHub.propTypes = propTypes;

export default withStyles(styles)(GitHub);
