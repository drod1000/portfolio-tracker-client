import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';

import PortfolioTable from '../../PortfolioTable/PortfolioTable';

const styles = {
  paper: {
    padding: 24,
    minWidth: 1024
  },
  typography: {
    marginBottom: 12
  }
}

class Portfolio extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.paper}>
        <Typography
          className={classes.typography}
          variant="h4"
          color="primary">
          Portfolio
        </Typography>
        <PortfolioTable />
      </Paper>
    )
  }
}

Portfolio.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Portfolio);