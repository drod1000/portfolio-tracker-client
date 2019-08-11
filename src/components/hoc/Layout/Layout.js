import React , { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import Aux from '../Aux/Aux';
import PortfolioTrackerAppBar from '../../Navigation/PortfolioTrackerAppBar/PortfolioTrackerAppBar';

class Layout extends Component {

  render () {
    return (
      <Aux>
        <PortfolioTrackerAppBar></PortfolioTrackerAppBar>
        <Grid container justify="center">
          {this.props.children}
        </Grid>
      </Aux>
    )
  }
}

export default Layout;