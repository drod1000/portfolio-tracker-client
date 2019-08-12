import * as actionTypes from './actionTypes';

const createData = (symbol, quantity, buyPrice, currentPrice) => {
  return { symbol, quantity, buyPrice, currentPrice };
}

export const initPositions = () => {
  return dispatch => {
    dispatch(loadPositionsInProgress());
    setTimeout(() => {
      const positions = [
        createData('AAPL', 10, 160.00, 175.00),
        createData('FB', 20, 150.00, 200.00),
        createData('SBUX', 25, 55.00, 80.00),
        createData('PEP', 15, 135.00, 125.00),
        createData('TSN', 30, 72.00, 80.00),
        createData('WM', 30, 90.00, 125.00),
        createData('TGT', 50, 70.00, 75.00),
        createData('ALL', 20, 85.00, 100.00),
        createData('DIS', 15, 100.00, 125.00),
        createData('NKE', 20, 120.00, 100.00)
      ];
      dispatch(loadPositionsSuccess(positions));
    }, 3000)
  }
}

export const loadPositionsInProgress = () => {
  return {
    type: actionTypes.LOAD_POSITIONS_IN_PROGRESS
  }
}

export const loadPositionsSuccess = (positions) => {
  return {
    type: actionTypes.LOAD_POSITIONS_SUCCESS,
    positions: positions
  }
}

export const loadPositionsFailure = () => {
  return {
    type: actionTypes.LOAD_POSITIONS_FAILURE
  }
}