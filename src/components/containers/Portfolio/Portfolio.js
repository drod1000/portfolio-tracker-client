import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';

import PortfolioTable from '../../PortfolioTable/PortfolioTable';
import AddPositionFormDialog from '../../AddPositionFormDialog/AddPositionFormDialog';
import * as actionCreators from '../../../store/actions/index';

const styles = {
  paper: {
    padding: 24,
    minWidth: 1024
  },
  typography: {
    marginBottom: 12
  }
}

class Portfolio extends Component {
  componentDidMount() {
    this.props.initPositions();
  }

  render() {
    const { classes } = this.props;
    let table = null;

    if (!this.props.isLoading) {
      table = <PortfolioTable positions={this.props.positions} />
    }

    return (
      <Paper className={classes.paper}>
        <Grid container>
          <Grid item xs={10}>
            <Typography
              className={classes.typography}
              variant="h4"
              color="primary">
              Portfolio
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <AddPositionFormDialog></AddPositionFormDialog>
          </Grid>
        </Grid>
        {table}
      </Paper>
    )
  }
}

Portfolio.propTypes = {
  classes: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => {
  return {
    positions: state.positions,
    isLoading: state.isLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    initPositions: () => dispatch(actionCreators.initPositions())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Portfolio));