import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Table } from '@material-ui/core';
import { TableHead } from '@material-ui/core';
import { TableCell } from '@material-ui/core';
import { TableBody } from '@material-ui/core';
import { TableRow } from '@material-ui/core';

import {getLanguage} from '../core/langnames.js'

function Language({
  classes,
  name,
  style,
}) {
  let _lang;
  _lang = getLanguage({name})
  return (
      <Table className={classes.root} style={style}>
        <TableHead>
          <TableRow>
            <TableCell>Attribute</TableCell>
            <TableCell>Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Language ID</TableCell>
            <TableCell>{_lang.languageId}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Language Name</TableCell>
            <TableCell>{_lang.languageName}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Region</TableCell>
            <TableCell>{_lang.region}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Is Gateway?</TableCell>
            <TableCell>{_lang.gateway}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Country</TableCell>
            <TableCell>{_lang.country}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Localized</TableCell>
            <TableCell>{_lang.localized}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Direction</TableCell>
            <TableCell>{_lang.direction}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Aliases</TableCell>
            <TableCell>{_lang.aliases}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Countries</TableCell>
            <TableCell>{_lang.countries}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
};

Language.propTypes = {
  /** @ignore */
  classes: PropTypes.object.isRequired,
  /** The name of the language to display. */
  name: PropTypes.string.isRequired,
  /** The overriding CSS for this component */
  style: PropTypes.object,
};

const styles = theme => ({
  root: {
  },
});

export default withStyles(styles)(Language);
