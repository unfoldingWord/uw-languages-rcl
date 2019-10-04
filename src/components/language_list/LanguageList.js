import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { List } from '@material-ui/core';
import { ListItem } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';

import { getLanguages } from '../../core/langnames.js'

function LanguageList({
  format,
  filter,
  limit,
  classes,
  style,
}) {
  let _langs;
  _langs = getLanguages( format, filter, limit );
  //var x;
  const _items = _langs
    .map( (x,index) => <ListItem key={index}><ListItemText primary={x} /></ListItem> )
  return (
      <div className={classes.root} style={style}>
        <List dense={true}>
          {_items}
        </List>
      </div>
    );
};

LanguageList.propTypes = {
  /** @ignore */
  classes: PropTypes.object.isRequired,
  /** The format used to display matching languages. */
  format: PropTypes.string,
  /** Optional string filter languages (as displayed). */
  filter: PropTypes.string,
  /** The number of results to return. */
  limit: PropTypes.number,
  /** The overriding CSS for this component */
  style: PropTypes.object,
};

LanguageList.defaultProps = {
  format: 'uw',
  filter: '',
  limit: 10,
}

const styles = theme => ({
  root: {
  },
});

export default withStyles(styles)(LanguageList);
