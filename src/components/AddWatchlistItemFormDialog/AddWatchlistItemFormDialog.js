import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux'
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

class AddWatchlistItemFormDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      formData: {
        tickerSymbol: '',
        watchDate: new Date(),
        watchPrice: null
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
    const item = {
      StockSymbol: this.state.formData.tickerSymbol,
      WatchDate: formattedDate,
      WatchPrice: this.state.formData.watchPrice
    }

    this.setState({ open: false});
    this.props.initAddWatchlistItem(item);
  }

  handleInputChange = (target) => {
    let updatedFormData = { ...this.state.formData };
    updatedFormData[target.name] = target.value;

    this.setState({ formData: updatedFormData });
  }

  handleWatchDateChange = (date) => {
    let updatedFormData = { ...this.state.formData };
    updatedFormData.watchDate = date;

    this.setState({ formData: updatedFormData});
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
          Add Watchlist Item
        </Button>
        <Dialog
          fullWidth={true}
          maxWidth='sm'
          open={this.state.open}
          onClose={this.handleClose}>
          <StyledDialogTitle>
            Add Stock
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
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                className={classes.formInput}
                disableToolbar
                disableFuture
                variant="inline"
                format="MM/dd/yyyy"
                label="Watch Date"
                name="watchDate"
                value={this.state.formData.watchDate}
                onChange={this.handleWatchDateChange}
              />
            </MuiPickersUtilsProvider>
            <TextField
              className={classes.formInput}
              required
              variant="outlined"
              label="Watch Price"
              name="watchPrice"
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

AddWatchlistItemFormDialog.propTypes = {
  classes: PropTypes.object.isRequired,
}

const mapDispatchToProps = (dispatch) => {
  return {
    initAddWatchlistItem: (item) => dispatch(actionCreators.initAddWatchlistItem(item))
  }
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(AddWatchlistItemFormDialog));