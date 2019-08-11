import React from 'react';
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

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleClick}>
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}>
            <MenuItem onClick={handleClose}>Portfolio</MenuItem>
            <MenuItem onClick={handleClose}>Watchlist</MenuItem>
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

export default withStyles(styles)(PortfolioTrackerAppBar);