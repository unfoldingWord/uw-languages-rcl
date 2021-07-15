import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Table } from '@material-ui/core';
import { TableHead } from '@material-ui/core';
import { TableCell } from '@material-ui/core';
import { TableBody } from '@material-ui/core';
import { TableRow } from '@material-ui/core';

import { getLanguage } from '../../../core/langnames.js'

function LanguageAttributes({
  lc,
  classes,
  style,
}) {
  let _lang;
  _lang = getLanguage( lc )
  if ( _lang === undefined ) {
    _lang = {
      id: 0,
      ang: "unk",
      lr: "unk",
      gw: "unk",
      hc: "unk",
      ln: "unk",
      lc: lc,
      ld: "unk",
      alt: "unk",
      cc: "unk",
    };
  }
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
            <TableCell>Language Code</TableCell>
            <TableCell>{_lang.lc}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Language Name</TableCell>
            <TableCell>{_lang.ang}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Region</TableCell>
            <TableCell>{_lang.lr}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Gateway</TableCell>
            <TableCell>{_lang.gw}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Country</TableCell>
            <TableCell>{_lang.hc}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Local Name</TableCell>
            <TableCell>{_lang.ln}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Direction</TableCell>
            <TableCell>{_lang.ld}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Aliases</TableCell>
            <TableCell>{_lang.alt.join()}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Countries</TableCell>
            <TableCell>{_lang.cc.join()}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
};

LanguageAttributes.propTypes = {
  /** @ignore */
  classes: PropTypes.object.isRequired,
  /** The language code of the language to display. */
  lc: PropTypes.string.isRequired,
  /** The overriding CSS for this component */
  style: PropTypes.object,
};

const styles = theme => ({
  root: {
  },
});

export default withStyles(styles)(LanguageAttributes);
