import {
  ERROR,
  SMURFS_FETCH,
  SMURFS_FETCH_SUCCESS,
  SMURF_ADD,
  SMURF_ADD_SUCCESS,
  SMURF_UPDATE,
  SMURF_UPDATE_SUCCESS,
  SMURF_DELETE,
  SMURF_DELETE_SUCCESS,
} from '../actions';

const initialState = {
  smurfsFetching: false,
  smurfsFetched: false,
  smurfAdd: false,
  smurfAdded: false,
  smurfUpdate: false,
  smurfUpdated: false,
  smurfDelete: false,
  smurfDeleted: false,
  error: null,
  smurfs: []
}

export default (state = initialState, action) => {
  switch(action.type){
    case SMURFS_FETCH:
      return {
        ...state,
        smurfsFetching: true
      }
    
    case SMURFS_FETCH_SUCCESS:
      return {
        ...state,
        smurfsFetching: false,
        smurfsFetched: true,
        smurfs: action.payload
      }
    
    case SMURF_ADD:
      return {
        ...state,
        smurfAdd: true
      }
    
    case SMURF_ADD_SUCCESS:
      return {
        ...state,
        smurfAdd: false,
        smurfAdded: true,
        smurfs: action.payload
      }
    
    case SMURF_UPDATE:
      return {
        ...state,
        smurfUpdate: true
      }
    
    case SMURF_UPDATE_SUCCESS:
      return {
        ...state,
        smurfUpdate: false,
        smurfUpdated: true,
        smurfs: action.payload
      }
    
    case SMURF_DELETE:
      return {
        ...state,
        smurfDelete: true
      }
    
    case SMURF_DELETE_SUCCESS:
      return {
        ...state,
        smurfDelete: false,
        smurfDeleted: true,
        smurfs: action.payload
      }
    
    case ERROR:
      return {
        ...state,
        error: action.payload
      }
    
    default:
      return state;
  }
}