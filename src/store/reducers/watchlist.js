import * as actionTypes from '../actions/actionTypes';

const initialState = {
  watchlist: [],
  isLoading: false,
  isLoaded: false,
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
        isLoading: false,
        isLoaded: true
      }
    case actionTypes.LOAD_POSITIONS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true
      }
    case actionTypes.ADD_WATCHLIST_ITEM_SUCCESS:
      return {
        ...state,
        watchlist: state.watchlist.concat(action.newItem),
        isLoading: false
      }
    default:
      return state;
  }
}

export default watchlistReducer;