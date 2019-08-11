import * as actionTypes from '../actions/actionTypes';

const initialState = {
  positions: [],
  isError: false
}

const positionsReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.INIT_POSITIONS:
      return state;
    case actionTypes.LOAD_POSITIONS_SUCCESS:
      return {
        ...state,
        positions: action.positions
      }
    case actionTypes.LOAD_POSITIONS_FAILURE:
      return {
        ...state,
        isError: true
      }
    default:
      return state;
  }
}

export default positionsReducer;