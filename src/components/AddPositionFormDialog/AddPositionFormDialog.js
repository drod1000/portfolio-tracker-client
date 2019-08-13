import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  button: {
    width: '100%'
  }
})

const AddPositionFormDialog = () => {
  const [open, setOpen] = React.useState(false);
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
        <DialogTitle >Add Position</DialogTitle>
        <DialogContent>
          Dialog content goes here
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