import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
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
      formData: {

      }
    }
  }

  handleOpen = () => {
    this.setState({ open: true });
  }

  handleClose = () => {
    this.setState({ open: false });
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
          <DialogContent>
            Dialog content goes here
          </DialogContent>
        </Dialog>
      </div>
    )
  }
}

ClosePositionFormDialog.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ClosePositionFormDialog);