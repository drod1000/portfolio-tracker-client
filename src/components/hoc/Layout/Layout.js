import React , { Component } from 'react';

import Aux from '../Aux/Aux';
import PortfolioTrackerAppBar from '../../Navigation/PortfolioTrackerAppBar/PortfolioTrackerAppBar';

class Layout extends Component {

  render () {
    return (
      <Aux>
        <PortfolioTrackerAppBar></PortfolioTrackerAppBar>
        <main>
          Main goes here
        </main>
      </Aux>
    )
  }
}

export default Layout;