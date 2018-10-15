import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const propTypes = {
  repoInfo: PropTypes.object.isRequired,
};

const RepoInfo = ({ repoInfo }) => (
  <Fragment>
    { repoInfo.id
      ? <div>
        <div>Github user selected repo information:</div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Fork</TableCell>
              <TableCell>Stars</TableCell>
              <TableCell>Issues</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
            <TableCell>{ repoInfo.name }</TableCell>
            <TableCell>{ repoInfo.description }</TableCell>
            <TableCell>{ repoInfo.fork.toString() }</TableCell>
            <TableCell>{ repoInfo.stargazers_count }</TableCell>
            <TableCell>{ repoInfo.open_issues }</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      </div>
      : null
    }
  </Fragment>
);

RepoInfo.propTypes = propTypes;

export default RepoInfo;
