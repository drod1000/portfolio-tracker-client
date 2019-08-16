import * as actionTypes from './actionTypes';

const createData = (symbol, watchDate, watchPrice, currentPrice) => {
  return { symbol, watchDate, watchPrice, currentPrice };
}

export const initWatchlist = () => {
  return dispatch => {
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

export const loadWatchlistInProgress = () => {
  return {
    type: actionTypes.LOAD_WATCHLIST_IN_PROGRESS
  }
}

export const loadWatchlistSuccess = (watchlist) => {
  return {
    type: actionTypes.LOAD_WATCHLIST_SUCCESS,
    watchlist: watchlist
  }
}

export const loadWatchlistFailure = () => {
  return {
    type: actionTypes.LOAD_WATCHLIST_FAILURE
  }
}

export const initAddWatchlistItem = (item) => {
  return dispatch => {
    dispatch(addWatchlistItemInProgress());

    setTimeout(() => {
      const itemWithPrice = {
        ...item,
        watchPrice: 80.00,
        currentPrice: 75.00
      }
      dispatch(addWatchlistItemSuccess(itemWithPrice));
    }, 1500)
  }
}

export const addWatchlistItemInProgress = () => {
  return {
    type: actionTypes.ADD_WATCHLIST_ITEM_IN_PROGRESS
  }
}

export const addWatchlistItemSuccess = (item) => {
  return {
    type: actionTypes.ADD_WATCHLIST_ITEM_SUCCESS,
    newItem: item
  }
}

export const addWatchlistItemFailure = () => {
  return {
    type: actionTypes.ADD_WATCHLIST_ITEM_FAILURE
  }
}