import axios from 'axios';

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE';

export const POST_SMURF_START = 'POST_SMURF_START';
export const POST_SMURF_SUCCESS = 'POST_SMURF_SUCCESS';
export const POST_SMURF_FAILURE = 'POST_SMURF_FAILURE';

export const getSmurfs = () => dispatch => {
    dispatch({type: FETCH_SMURFS_START});
    axios.get('http://localhost:3333/smurfs')
    .then(response => {
        console.log(response);
        dispatch({type: FETCH_SMURFS_SUCCESS, payload: response.data});
    })
    .catch(err=> {
        console.log(err);
        dispatch({type: FETCH_SMURFS_FAILURE, payload: err.response});
    })
};

export const addSmurf = (body) => dispatch => {
    dispatch({type: POST_SMURF_START});
    axios.post('http://localhost:3333/smurfs', body)
    .then(response => {
        console.log(response);
        dispatch({type: POST_SMURF_SUCCESS, payload: response.data});
    })
    .catch(err => {
        dispatch({type: POST_SMURF_FAILURE, payload: err.response})
        console.log(err)});
};