import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import { MuiPickersUtilsProvider, KeyboardDatePicker}  from '@material-ui/pickers';
import { makeStyles } from '@material-ui/styles';

import { StyledDialogTitle } from '../styled/Dialog/Dialog';

const useStyles = makeStyles({
  button: {
    width: '100%'
  },
  dialogContent: {
    display: 'flex',
    flexDirection: 'column'
  },
  formInput: {
    marginBottom: 8
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
      <Dialog
        fullWidth={true}
        maxWidth='sm'
        open={open}
        onClose={handleClose}>
        <StyledDialogTitle>
          Add Position
        </StyledDialogTitle>
        <DialogContent className={classes.dialogContent}>
          <TextField
            className={classes.formInput}
            required
            variant="outlined"
            label="Ticker Symbol"
          />
          <TextField
            className={classes.formInput}
            required
            variant="outlined"
            label="Quantity"
            type="number"
          />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              className={classes.formInput}
              disableToolbar
              disableFuture
              variant="inline"
              format="MM/dd/yyyy"
              label="Acquisition Date"
              value={acquisitionDate}
              onChange={handleAcquisitionDateChange}
            />
          </MuiPickersUtilsProvider>
          <TextField
            className={classes.formInput}
            required
            variant="outlined"
            label="Acquisition Price"
            type="number"
          />
        </DialogContent>
        <DialogActions>
          <Button color="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button color="primary" onClick={handleSave}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default AddPositionFormDialog;