import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';

import WatchlistTable from '../../WatchlistTable/WatchlistTable';
import AddWatchlistItemFormDialog from '../../AddWatchlistItemFormDialog/AddWatchlistItemFormDialog';
import { Spinner } from '../../Styled/Feedback/Spinner';
import * as actionCreators from '../../../store/actions/index';

const styles = {
  paper: {
    flexGrow: 1,
    padding: 24
  },
  header: {
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

    if (this.props.isLoading) {
      watchlist = <Spinner />
    }

    if (this.props.isLoaded) {
      watchlist = <WatchlistTable watchlist={this.props.watchlist}></WatchlistTable>
    }

    return (
      <Paper className={classes.paper}>
        <Grid className={classes.header} container>
          <Grid item xs={10}>
            <Typography
              variant="h4"
              color="primary">
              Watchlist
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <AddWatchlistItemFormDialog></AddWatchlistItemFormDialog>
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
    isLoading: state.watchlist.isLoading,
    isLoaded: state.watchlist.isLoaded
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    initWatchlist: () => dispatch(actionCreators.initWatchlist())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Watchlist));