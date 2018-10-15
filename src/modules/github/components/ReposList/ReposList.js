import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const propTypes = {
  repos: PropTypes.array.isRequired,
  selectedRepoId: PropTypes.number,
  handleSelectRepo: PropTypes.func.isRequired,
};

const ReposList = ({ repos, selectedRepoId, handleSelectRepo }) => (
  <Fragment>
    { repos.length
      ? <div>
        <div>Github user repos information:</div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Repo name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { repos.map((repo) => (
              <TableRow
                key={ repo.id }
                hover
                aria-checked={ repo.id === selectedRepoId }
                selected={ repo.id === selectedRepoId }
                onClick={ handleSelectRepo.bind(null, repo.id) }
              >
                <TableCell>{ repo.name }</TableCell>
              </TableRow>
            )) }
          </TableBody>
        </Table>
      </div>
      : null
    }
  </Fragment>
);

ReposList.propTypes = propTypes;

export default ReposList;
