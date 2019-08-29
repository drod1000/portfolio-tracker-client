import axios from 'axios';

import * as actionTypes from './actionTypes';

const createData = (symbol, watchDate, watchPrice, currentPrice) => {
  return { symbol, watchDate, watchPrice, currentPrice };
}

export const initWatchlist = () => {
  return (dispatch, getState) => {
    const { watchlist } = getState();
    if (watchlist.isLoading || watchlist.isLoaded) { return; }

    dispatch(loadWatchlistInProgress());
    axios.get('http://localhost:3000/watchlist')
      .then(response => {
        dispatch(loadWatchlistSuccess(response.data));
      })
      .catch(error => {
        dispatch(loadWatchlistFailure());
      });
  }
}

const loadWatchlistInProgress = () => {
  return {
    type: actionTypes.LOAD_WATCHLIST_IN_PROGRESS
  }
}

const loadWatchlistSuccess = (watchlist) => {
  return {
    type: actionTypes.LOAD_WATCHLIST_SUCCESS,
    watchlist: watchlist
  }
}

const loadWatchlistFailure = () => {
  return {
    type: actionTypes.LOAD_WATCHLIST_FAILURE
  }
}

export const initAddWatchlistItem = (item) => {
  return dispatch => {
    axios.post('http://localhost:3000/watchlist', item)
      .then(response => {
        dispatch(addWatchlistItemSuccess(response.data));
      })
      .catch(error => {
        console.log(error);
      });
  }
}

const addWatchlistItemSuccess = (item) => {
  return {
    type: actionTypes.ADD_WATCHLIST_ITEM_SUCCESS,
    newItem: item
  }
}
