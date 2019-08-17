import React from 'react';
import { AppBar } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

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
          <Typography variant="h6">
            Portfolio Tracker
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default PortfolioTrackerAppBar;