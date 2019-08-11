import React , { Component } from 'react';

import Aux from '../Aux/Aux';
import PortfolioTrackerAppBar from '../../Navigation/PortfolioTrackerAppBar/PortfolioTrackerAppBar';

class Layout extends Component {

  render () {
    return (
      <Aux>
        <PortfolioTrackerAppBar></PortfolioTrackerAppBar>
        <main>
          {this.props.children}
        </main>
      </Aux>
    )
  }
}

export default Layout;