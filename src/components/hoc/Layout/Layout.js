import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

import Aux from '../Aux/Aux';
import PortfolioTrackerAppBar from '../../Navigation/PortfolioTrackerAppBar/PortfolioTrackerAppBar';
import PortfolioTrackerNavbar from '../../Navigation/PortfolioTrackerNavbar/PortfolioTrackerNavbar';

const useStyles = makeStyles(theme => ({
  main: {
    maxWidth: 1232,
    margin: 'auto'
  }
}))

const Layout = () => {
  const classes = useStyles();

  return (
    <Aux>
      <PortfolioTrackerAppBar />
      <Box className={classes.main}>
        <PortfolioTrackerNavbar />
      </Box>
    </Aux>
  )
}

export default Layout;