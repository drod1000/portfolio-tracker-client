import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';

export const WhiteTypography = withStyles(theme => ({
  root: {
    color: theme.palette.common.white
  }
}))(Typography)