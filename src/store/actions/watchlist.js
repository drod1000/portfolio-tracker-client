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
    setTimeout(() => {
      const watchlist = [
        createData('WFC', new Date(2019, 1, 15), 50.00, 45.00),
        createData('CI', new Date(2019, 1, 15), 72.00, 60.00),
        createData('GOOGL', new Date(2019, 1, 15), 1200.00, 1000),
        createData('CVS', new Date(2019, 1, 15), 65.00, 55.00),
        createData('XOM', new Date(2019, 1, 15), 80.00, 68.00),
        createData('WOW', new Date(2019, 1, 15), 100.00, 90.00),
        createData('WOWER', new Date(2019, 1, 15), 110.00, 80.00),
        createData('WOWEST', new Date(2019, 1, 15), 105.00, 85.00)
      ];
      dispatch(loadWatchlistSuccess(watchlist));
    }, 3000)
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
