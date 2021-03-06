import axios from 'axios';

import * as actionTypes from './actionTypes';

export const initPositions = () => {
  return (dispatch, getState) => {
    const { positions } = getState();
    if (positions.isLoading || positions.isLoaded) { return; }

      dispatch(loadPositionsInProgress());
      axios.get(`${process.env.REACT_APP_API_BASE_URL}/positions`)
        .then(response => {
          dispatch(loadPositionsSuccess(response.data));
        })
        .catch(error => {
          dispatch(loadPositionsFailure());
        });
  }
}

const loadPositionsInProgress = () => {
  return {
    type: actionTypes.LOAD_POSITIONS_IN_PROGRESS
  }
}

const loadPositionsSuccess = (positions) => {
  return {
    type: actionTypes.LOAD_POSITIONS_SUCCESS,
    positions: positions
  }
}

const loadPositionsFailure = () => {
  return {
    type: actionTypes.LOAD_POSITIONS_FAILURE
  }
}

export const initAddPosition = (position) => {
  return dispatch => {
    axios.post(`${process.env.REACT_APP_API_BASE_URL}/positions`, position)
      .then(response => {
        dispatch(addPositionSuccess(response.data));
      })
      .catch(error => {
        console.log(error);
      });
  }
}

const addPositionSuccess = (position) => {
  return {
    type: actionTypes.ADD_POSITION_SUCCESS,
    newPosition: position
  }
}

export const initClosePosition = (closePositionPayload) => {
  return dispatch => {
    axios.post(`${process.env.REACT_APP_API_BASE_URL}/positions/close`, closePositionPayload)
      .then(response => {
        const closePositionResult = response.data;
        if (closePositionResult.Quantity === 0) {
          dispatch(removePosition(closePositionResult.PositionId));
        } else {
          dispatch(updatePositionQuantity(closePositionResult.PositionId, closePositionResult.Quantity));
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
}

const removePosition = (positionId) => {
  return {
    type: actionTypes.REMOVE_POSITION,
    positionId: positionId
  }
}

const updatePositionQuantity = (positionId, quantity) => {
  return {
    type: actionTypes.UPDATE_POSITION_QUANTITY,
    payload: { PositionId: positionId, Quantity: quantity }
  }
}