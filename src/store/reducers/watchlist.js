import * as actionTypes from '../actions/actionTypes';

const initialState = {
  watchlist: [],
  isLoading: false,
  isError: false
}

const watchlistReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.LOAD_WATCHLIST_IN_PROGRESS:
      return {
        ...state,
        isLoading: true
      }
    case actionTypes.LOAD_WATCHLIST_SUCCESS:
      return {
        ...state,
        watchlist: action.watchlist,
        isLoading: false
      }
    case actionTypes.LOAD_POSITIONS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true
      }
    default:
      return state;
  }
}

export default watchlistReducer;