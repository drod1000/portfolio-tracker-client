import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
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
  main: {
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

class ClosePositionFormDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      maxQuantity: this.props.stockPosition.quantity,
      formData: {
        symbol: this.props.stockPosition.symbol,
        quantity: this.props.stockPosition.quantity,
        sellDate: new Date(),
        sellPrice: null
      }
    }
  }

  handleSave = () => {
    const formattedDate = moment(this.state.formData.buyDate).format('YYYY-MM-DD');
    const cancelPositionPayload = {
      PositionId: this.props.stockPosition.positionId,
      Quantity: Number(this.state.formData.quantity),
      SellDate: formattedDate,
      SellPrice: Number(this.state.formData.sellPrice)
    }

    console.log(cancelPositionPayload);
  }

  handleOpen = () => {
    this.setState({ open: true });
  }

  handleClose = () => {
    this.setState({ open: false });
  }

  handleInputChange = (target) => {
    let updatedFormData = { ...this.state.formData };
    updatedFormData[target.name] = target.value;

    this.setState({ formData: updatedFormData });
  }

  handleBuyDateChange = (date) => {
    let updatedFormData = { ...this.state.formData };
    updatedFormData.buyDate = date;

    this.setState({ formData: updatedFormData });
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <div
          className={classes.main}
          variant="outlined"
          color="primary"
          onClick={this.handleOpen}
        >ClosePosition
        </div>
        <Dialog
          fullWidth={true}
          maxWidth='sm'
          open={this.state.open}
          onClose={this.handleClose}
        >
          <StyledDialogTitle>
            Close Position
          </StyledDialogTitle>
          <DialogContent className={classes.dialogContent}>
            <TextField
              className={classes.formInput}
              required
              disabled
              variant="outlined"
              label="Ticker Symbol"
              name="symbol"
              value={this.state.formData.symbol}
              onChange={(event) => this.handleInputChange(event.target)}
            />
            <TextField
              className={classes.formInput}
              required
              variant="outlined"
              label="Quantity"
              name="quantity"
              type="number"
              InputProps={{ inputProps: { min: 1, max: this.state.maxQuantity } }}
              value={this.state.formData.quantity}
              onChange={(event) => this.handleInputChange(event.target)}
            />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                className={classes.formInput}
                disableToolbar
                disableFuture
                variant="inline"
                format="MM/dd/yyyy"
                label="Sell Date"
                name="sellDate"
                value={this.state.formData.sellDate}
                onChange={this.handleSellDateChange}
              />
            </MuiPickersUtilsProvider>
            <TextField
              className={classes.formInput}
              required
              variant="outlined"
              label="Sell Price"
              name="sellPrice"
              type="number"
              onChange={(event) => this.handleInputChange(event.target)}
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

ClosePositionFormDialog.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ClosePositionFormDialog);