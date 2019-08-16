import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';

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

class Watchlist extends Component {
  componentDidMount() {
    this.props.initWatchlist();
  }

  render() {
    const { classes } = this.props;
    let watchlist = null;

    if (!this.props.isLoading) {
      watchlist = this.props.watchlist.map(i => (<div key={i.symbol}>{i.symbol}</div>))
    }

    return (
      <Paper className={classes.paper}>
        <Grid container>
          <Grid item xs={10}>
            <Typography
              className={classes.typography}
              variant="h4"
              color="primary">
              Watchlist
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <div>Add Dialog Button</div>
          </Grid>
        </Grid>
        {watchlist}
      </Paper>
    )
  }
}

Watchlist.propTypes = {
  classes: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => {
  return {
    watchlist: state.watchlist.watchlist,
    isLoading: state.watchlist.isLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    initWatchlist: () => dispatch(actionCreators.initWatchlist())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Watchlist));