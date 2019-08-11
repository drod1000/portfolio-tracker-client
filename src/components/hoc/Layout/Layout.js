import React , { Component } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
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
        <Container className={classes.container}>
          {this.props.children}
        </Container>
      </Aux>
    )
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Layout);