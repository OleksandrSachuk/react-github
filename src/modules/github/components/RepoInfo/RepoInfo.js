import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow
} from '@material-ui/core';

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
