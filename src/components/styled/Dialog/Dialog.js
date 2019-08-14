import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/styles';

export const StyledDialogTitle = withStyles(theme => ({
  root: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    textTransform: 'uppercase',
    marginBottom: 12
  }
}))(DialogTitle);