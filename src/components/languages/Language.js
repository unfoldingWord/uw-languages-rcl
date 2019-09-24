import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Table } from '@material-ui/core';
import { TableHead } from '@material-ui/core';
import { TableCell } from '@material-ui/core';
import { TableBody } from '@material-ui/core';
import { TableRow } from '@material-ui/core';
import { Table } from '@material-ui/core';
import { Table } from '@material-ui/core';
import languagesJSON from './languages.json';

function Language({
  name,
}) {
  let _lang;
  _lang = getLanguage(name)
  return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Attribute</TableCell>
            <TableCell>Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Language ID</TableCell>
            <TableCell>_lang.languageId</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Language Name</TableCell>
            <TableCell>_lang.languageName</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Region</TableCell>
            <TableCell>_lang.region</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Is Gateway?</TableCell>
            <TableCell>_lang.gateway</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Country</TableCell>
            <TableCell>_lang.country</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Localized</TableCell>
            <TableCell>_lang.localized</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Direction</TableCell>
            <TableCell>_lang.direction</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Aliases</TableCell>
            <TableCell>_lang.aliases</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Aliases</TableCell>
            <TableCell>_lang.aliases</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Countries</TableCell>
            <TableCell>_lang.countries</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
};

export const getLanguage = ({languageId}) => {
  let _language;
  const language = languagesJSON.filter(object => object.lc === languageId)[0];
  _language = formatLanguage({language});
  return _language;
};

export const getLanguageName = ({languageId}) => {
  const language = getLanguage({languageId});
  const languageName = language ? language.ln : null;
  return languageName;
};

export const getLanguages = () => {
  const _languages = languagesJSON
  .map(language => formatLanguage({language}));
  return _languages;
};

export const getGatewayLanguages = () => {
  const _languages = languagesJSON
  .filter(language => language.gw)
  .map(language => formatLanguage({language}));
  return _languages;
}

export const formatLanguage = ({language}) => {
  let _language = {};
  if (language) {
    _language = {
      id: language.pk,
      languageId: language.lc,
      languageName: language.ang,
      region: language.lr,
      gateway: language.gw,
      country: language.hc,
      localized: language.ln,
      direction: language.ld,
      aliases: language.alt,
      countries: language.cc,
    };
  }
  return _language;
};

Language.propTypes = {
  /** @ignore */
  classes: PropTypes.object.isRequired,
  /** The name of the person to say hello to. */
  name: PropTypes.string.isRequired,
  /** The overriding CSS for this component */
  style: PropTypes.object,
};

const styles = theme => ({
  root: {
  },
});

export default withStyles(styles)(Language);
//export const languages = getLanguages();
//export const gatewayLanguages = getGatewayLanguages();
