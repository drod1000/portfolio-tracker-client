import * as actionTypes from './actionTypes';

export const initPositions = () => {
  const positions = [
    createData('AAPL', 10, 175.00),
    createData('FB', 20, 200.00),
    createData('SBUX', 25, 80.00),
    createData('PEP', 15, 125.00),
    createData('TSN', 30, 80.00),
    createData('WM', 30, 125.00),
    createData('TGT', 50, 75.00),
    createData('ALL', 20, 100.00),
    createData('DIS', 15, 125.00),
    createData('NKE', 20, 100.00)
  ];
  dispatch(loadPositionsSuccess(positions));
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