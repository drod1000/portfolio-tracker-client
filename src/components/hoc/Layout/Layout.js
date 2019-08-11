import React , { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/styles';

import Aux from '../Aux/Aux';
import PortfolioTrackerAppBar from '../../Navigation/PortfolioTrackerAppBar/PortfolioTrackerAppBar';

const styles = {
  container: {
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
        <Grid className={classes.container} container justify = "center">
          {this.props.children}
        </Grid>
      </Aux>
    )
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Layout);