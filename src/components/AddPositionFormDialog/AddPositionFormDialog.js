import React, { Component } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import { MuiPickersUtilsProvider, KeyboardDatePicker}  from '@material-ui/pickers';
import { withStyles } from '@material-ui/styles';

import { StyledDialogTitle } from '../styled/Dialog/Dialog';

const styles = {
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
}

class AddPositionFormDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      formData: {
        tickerSymbol: '',
        quantity: null,
        acquisitionDate: new Date(),
        acquisitionPrice: null
      }
    }
  }

  handleOpen = () => {
    this.setState({ open: true });
  }

  handleClose = () => {
    this.setState({ open: false });
  }

  handleSave = () => {
    this.setState({ open: false });
    console.log(this.state);
  }

  handleAcquisitionDateChange = (date) => {
    console.log('New date is', date);
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button
          className={classes.button}
          variant="outlined"
          color="primary"
          onClick={this.handleOpen}>
          Add Position
        </Button>
        <Dialog
          fullWidth={true}
          maxWidth='sm'
          open={this.state.open}
          onClose={this.handleClose}>
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
                value={this.state.formData.acquisitionDate}
                onChange={this.handleAcquisitionDateChange}
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
            <Button color="secondary" onClick={this.handleClose}>
              Cancel
            </Button>
            <Button color="primary" onClick={this.handleSave}>
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default (withStyles(styles)(AddPositionFormDialog));