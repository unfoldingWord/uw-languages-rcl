import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { getLanguageDisplay } from '../../../core/langnames.js'

function LanguageDisplay({
  lc,
  classes,
  style,
}) {
  let _lang;
  _lang = getLanguageDisplay( lc )
  if ( _lang === undefined ) {
    _lang = "unk";
  }
  return (
      <div className={classes.root} style={style}>{_lang}</div>
    );
};

LanguageDisplay.propTypes = { 
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

export default withStyles(styles)(LanguageDisplay);
