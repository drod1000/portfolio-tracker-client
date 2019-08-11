import React , { Component } from 'react';

import Aux from '../Aux/Aux';

class Layout extends Component {

  render () {
    return (
      <Aux>
        <div>Toolbar goes here</div>
        <main>
          Main goes here
        </main>
      </Aux>
    )
  }
}

export default Layout;