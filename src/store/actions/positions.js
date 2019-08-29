import axios from 'axios';

import * as actionTypes from './actionTypes';

export const initPositions = () => {
  return (dispatch, getState) => {
    const { positions } = getState();
    if (positions.isLoading || positions.isLoaded) { return; }

      dispatch(loadPositionsInProgress());
      axios.get('http://localhost:3000/positions')
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
    axios.post('http://localhost:3000/positions', position)
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
