import React from 'react';
import { AppBar } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/styles';

import { WhiteTypography }from '../../styled/Typography/Typography';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginBottom: 24
  }
})

const PortfolioTrackerAppBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.appBar}>
          <WhiteTypography variant="h6">
            Portfolio Tracker
          </WhiteTypography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default PortfolioTrackerAppBar;