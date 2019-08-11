import React from 'react';
import PropTypes from 'prop-types';
import { AppBar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/styles';

const styles = {
  root: {
    flexGrow: 1,
    marginBottom: 24
  },
  menuButton: {
    marginRight: 12
  }
}

const portfolioTrackerAppBar = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Portfolio Tracker
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

portfolioTrackerAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(portfolioTrackerAppBar);