import React , { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/styles';

import Aux from '../Aux/Aux';
import PortfolioTrackerAppBar from '../../Navigation/PortfolioTrackerAppBar/PortfolioTrackerAppBar';

const styles = {
  paper: {
    padding: 24,
    margin: 12
  }
}

class Layout extends Component {

  render () {
    const { classes } = this.props;
    return (
      <Aux>
        <PortfolioTrackerAppBar></PortfolioTrackerAppBar>
        <Paper className={classes.paper}>
          {this.props.children}
        </Paper>
      </Aux>
    )
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Layout);