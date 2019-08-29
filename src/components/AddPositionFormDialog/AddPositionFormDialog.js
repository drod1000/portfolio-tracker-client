import React, { Component } from 'react';
import { connect } from 'react-redux';
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
import * as actionCreators from '../../store/actions/index';

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
    const formattedDate = moment(this.state.formData.acquisitionDate).format('YYYY-MM-DD');
    const position = {
      StockSymbol: this.state.formData.tickerSymbol,
      Quantity: Number(this.state.formData.quantity),
      BuyDate: formattedDate,
      BuyPrice: Number(this.state.formData.acquisitionPrice)
    }

    this.setState({ open: false});
    this.props.initAddPosition(position);
  }

  handleInputChange = (target) => {
    let updatedFormData = { ...this.state.formData };
    updatedFormData[target.name] = target.value;

    this.setState({ formData: updatedFormData });
  }

  handleAcquisitionDateChange = (date) => {
    let updatedFormData = { ...this.state.formData };
    updatedFormData.acquisitionDate = date;

    this.setState({ formData: updatedFormData });
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
              name="tickerSymbol"
              onChange={(event) => this.handleInputChange(event.target)}
            />
            <TextField
              className={classes.formInput}
              required
              variant="outlined"
              label="Quantity"
              name="quantity"
              type="number"
              onChange={(event) => this.handleInputChange(event.target)}
            />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                className={classes.formInput}
                disableToolbar
                disableFuture
                variant="inline"
                format="MM/dd/yyyy"
                label="Acquisition Date"
                name="acquisitionDate"
                value={this.state.formData.acquisitionDate}
                onChange={this.handleAcquisitionDateChange}
              />
            </MuiPickersUtilsProvider>
            <TextField
              className={classes.formInput}
              required
              variant="outlined"
              label="Acquisition Price"
              name="acquisitionPrice"
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

AddPositionFormDialog.propTypes = {
  classes: PropTypes.object.isRequired,
}

const mapDispatchToProps = (dispatch) => {
  return {
    initAddPosition: (position) => dispatch(actionCreators.initAddPosition(position))
  }
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(AddPositionFormDialog));