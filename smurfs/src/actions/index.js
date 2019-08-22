import axios from 'axios';

export const ERROR = 'ERROR';
export const SMURFS_FETCH = 'SMURFS_FETCH';
export const SMURFS_FETCH_SUCCESS = 'SMURFS_FETCH_SUCCESS';
export const SMURF_ADD = 'SMURF_ADD';
export const SMURF_ADD_SUCCESS = 'SMURF_ADD_SUCCESS';
export const SMURF_UPDATE = 'SMURF_UPDATE';
export const SMURF_UPDATE_SUCCESS = 'SMURF_UPDATE_SUCCESS';
export const SMURF_DELETE = 'SMURF_DELETE';
export const SMURF_DELETE_SUCCESS = 'SMURF_DELETE_SUCCESS';

export const getSmurfs = () => {
  return dispatch => {
    dispatch({ type: SMURFS_FETCH })

    axios
      .get('http://localhost:3333/smurfs')
      .then(res => dispatch({
        type: SMURFS_FETCH_SUCCESS,
        payload: res.data
      }))
      .catch(err => dispatch({
        type: ERROR,
        payload: err
      }));
  }
}


export const addSmurf = (smurf) => {
  return dispatch => {
    dispatch({ type: SMURF_ADD })

    axios
      .post('http://localhost:3333/smurfs', smurf)
      .then(res => dispatch({
        type: SMURF_ADD_SUCCESS,
        payload: res.data
      }))
      .catch(err => dispatch({
        type: ERROR,
        payload: err
      }));
  }
}

export const updateSmurf = (smurf) => {
  return dispatch => {
    dispatch({ type: SMURF_UPDATE })

    axios
      .put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
      .then(res => dispatch({
        type: SMURF_UPDATE_SUCCESS,
        payload: res.data
      }))
      .catch(err => dispatch({
        type: ERROR,
        payload: err
      }));
  }
}


export const deleteSmurf = (id) => {
  return dispatch => {
    dispatch({ type: SMURF_DELETE })

    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => dispatch({
        type: SMURF_DELETE_SUCCESS,
        payload: res.data
      }))
      .catch(err => dispatch({
        type: ERROR,
        payload: err
      }));
  }
}