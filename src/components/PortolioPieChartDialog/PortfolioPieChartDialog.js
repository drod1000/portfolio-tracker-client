import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import PieChart from '@material-ui/icons/PieChart';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  centerButton : {
    display: 'block',
    margin: '0 auto'
  }
});

const PortfolioPieChartDialog = () => {
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
          Pie Chart Goes Here
      </Dialog>
    </div>
  )
}

export default PortfolioPieChartDialog;