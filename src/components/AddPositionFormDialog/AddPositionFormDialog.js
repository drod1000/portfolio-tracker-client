import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { MuiPickersUtilsProvider, KeyboardDatePicker}  from '@material-ui/pickers';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  button: {
    width: '100%'
  }
})

const AddPositionFormDialog = () => {
  const [open, setOpen] = React.useState(false);
  const [acquisitionDate, setAcquisitionDate] = React.useState(new Date());
  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const handleSave = () => {
    setOpen(false);
  }

  const handleAcquisitionDateChange = (date) => {
    setAcquisitionDate(date);
  }

  return (
    <div>
      <Button
        className={classes.button}
        variant="outlined"
        color="primary"
        onClick={handleOpen}>
        Add Position
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle disableTypography>
          <Typography variant="h4" color="primary">
            Add Position
          </Typography>
        </DialogTitle>
        <DialogContent>
          <TextField required label="Ticker Symbol" />
          <TextField required label="Quantity" type="number" />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              disableFuture
              variant="inline"
              format="MM/dd/yyyy"
              label="Acquisition Date"
              value={acquisitionDate}
              onChange={handleAcquisitionDateChange}
            />
          </MuiPickersUtilsProvider>
          <TextField required label="Acquisition Price" type="number" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default AddPositionFormDialog;