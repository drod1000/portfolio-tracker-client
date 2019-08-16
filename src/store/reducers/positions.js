import * as actionTypes from '../actions/actionTypes';

const initialState = {
  positions: [],
  isLoading: false,
  isLoaded: false,
  isError: false
}

const positionsReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.LOAD_POSITIONS_IN_PROGRESS:
      return {
        ...state,
        isLoading: true
      }
    case actionTypes.LOAD_POSITIONS_SUCCESS:
      return {
        ...state,
        positions: action.positions,
        isLoading: false,
        isLoaded: true
      }
    case actionTypes.LOAD_POSITIONS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true
      }
    case actionTypes.ADD_POSITION_SUCCESS:
      return {
        ...state,
        positions: state.positions.concat(action.newPosition),
        isLoading: false
      }
    default:
      return state;
  }
}

export default positionsReducer;