import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  TableBody,
  TableCell,
  TableRow
} from '@material-ui/core';

const propTypes = {
  info: PropTypes.object,
};

const Info = ({ info }) => (
  <Fragment>
    { info.id
      ? <div>
        <div>Github user information:</div>
        <Table>
          <TableBody>

            <TableRow key={ info.name }>
              <TableCell component="th" scope="row">
                Name
              </TableCell>
              <TableCell>{ info.name }</TableCell>
            </TableRow>

            <TableRow key={ info.email }>
              <TableCell component="th" scope="row">
                Email
              </TableCell>
              <TableCell>{ info.email }</TableCell>
            </TableRow>

            <TableRow key={ info.location }>
              <TableCell component="th" scope="row">
                Location
              </TableCell>
              <TableCell>{ info.location }</TableCell>
            </TableRow>

            <TableRow key={ info.followers }>
              <TableCell component="th" scope="row">
                Number of follower
              </TableCell>
              <TableCell>{ info.followers }</TableCell>
            </TableRow>

          </TableBody>
        </Table>

      </div>
      : null
    }
  </Fragment>
);

Info.propTypes = propTypes;

export default Info;
