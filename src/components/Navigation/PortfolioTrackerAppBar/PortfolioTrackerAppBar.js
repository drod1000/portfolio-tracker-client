import React from 'react';
import { withRouter } from "react-router";
import PropTypes from 'prop-types';
import { AppBar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
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

const PortfolioTrackerAppBar = (props) => {
  const { classes } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleMenuButtonClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function navigateToPortfolio() {
    setAnchorEl(null);

    if (props.history.location.pathname !== '/portfolio') {
      props.history.push('/portfolio');
    }
  }

  function navigateToWatchlist() {
    setAnchorEl(null);

    if (props.history.location.pathname !== '/watchlist') {
      props.history.push('/watchlist');
    }
  }

  function handleMenuClose() {
    setAnchorEl(null);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} edge="start" color="inherit" aria-label="menu" onClick={handleMenuButtonClick}>
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}>
            <MenuItem onClick={navigateToPortfolio}>Portfolio</MenuItem>
            <MenuItem onClick={navigateToWatchlist}>Watchlist</MenuItem>
          </Menu>
          <Typography variant="h6" color="inherit">
            Portfolio Tracker
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

PortfolioTrackerAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(withRouter(PortfolioTrackerAppBar));