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
/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
