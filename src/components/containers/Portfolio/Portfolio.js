import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/styles';

const styles = {
  paper: {
    padding: 12,
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
        <Typography className={classes.typography} variant="h4" color="primary">Portfolio</Typography>
        <div>
          Table goes here
        </div>
      </Paper>
    )
  }
}

Portfolio.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Portfolio);