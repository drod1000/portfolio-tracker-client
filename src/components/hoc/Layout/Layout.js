import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

import Aux from '../Aux/Aux';
import PortfolioTrackerAppBar from '../../Navigation/PortfolioTrackerAppBar/PortfolioTrackerAppBar';

const useStyles = makeStyles(theme => ({
  main: {
    maxWidth: 1232,
    margin: 'auto'
  }
}))

const Layout = (props) => {
  const classes = useStyles();

  return (
    <Aux>
      <PortfolioTrackerAppBar />
      <Box className={classes.main}>
        {props.children}
      </Box>
    </Aux>
  )
}

export default Layout;