import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import ClosePositionDialog from '../ClosePositionFormDialog/ClosePositionFormDialog';

const StockPositionMenu = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <Button color="primary" onClick={handleClick}>
        {props.stockPosition.symbol}
      </Button>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <ClosePositionDialog stockPosition={props.stockPosition}/>
        </MenuItem>
        <MenuItem onClick={handleClose}>View Chart</MenuItem>
      </Menu>
    </div>
  );
}

export default StockPositionMenu;