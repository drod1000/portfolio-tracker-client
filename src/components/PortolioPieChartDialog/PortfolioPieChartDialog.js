import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import PieChart from '@material-ui/icons/PieChart';
import { makeStyles } from '@material-ui/styles';

import PortfolioPieChart from '../PortfolioPieChart/PortfolioPieChart';

const useStyles = makeStyles({
  centerButton : {
    display: 'block',
    margin: '0 auto'
  }
});

const PortfolioPieChartDialog = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <IconButton className={classes.centerButton} onClick={handleOpen}>
        <PieChart />
      </IconButton>
      <Dialog
        fullWidth={true}
        maxWidth='lg'
        open={open}
        onClose={handleClose}>
          <PortfolioPieChart positions={props.positions}/>
      </Dialog>
    </div>
  )
}

export default PortfolioPieChartDialog;