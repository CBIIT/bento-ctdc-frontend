import React from 'react';
import {
  withStyles,
} from '@material-ui/core';

const styles = () => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 50,
  },
});

const UnauthorizedMessage = ({ classes }) => (
  <span className={classes.container}>
    Please log in to view available files
  </span>
);

export default withStyles(styles, { withTheme: true })(UnauthorizedMessage);
