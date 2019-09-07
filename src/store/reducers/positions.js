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
    case actionTypes.REMOVE_POSITION:
      return {
        ...state,
        positions: state.positions.filter(p => p.PositionId !== action.positionId)
      }
    case actionTypes.UPDATE_POSITION_QUANTITY:
      const updatePayload = action.payload;
      return {
        ...state,
        positions: state.positions.map((p) => {
          if (p.PositionId === updatePayload.PositionId) {
            return {
              ...p,
              Quantity: updatePayload.Quantity
            }
          } else {
            return p;
          }
        })
      }
    default:
      return state;
  }
}

export default positionsReducer;