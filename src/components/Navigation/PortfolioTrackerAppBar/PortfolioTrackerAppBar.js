import React from 'react';
import { withRouter } from "react-router";
import { AppBar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginBottom: 24
  },
  menuButton: {
    marginRight: 12
  }
})

const PortfolioTrackerAppBar = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();

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
          <IconButton className={classes.menuButton} edge="start" aria-label="menu" onClick={handleMenuButtonClick}>
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
          <Typography variant="h6">
            Portfolio Tracker
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default (withRouter(PortfolioTrackerAppBar));