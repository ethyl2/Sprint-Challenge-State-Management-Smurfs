import {
    FETCH_SMURFS_START,
    FETCH_SMURFS_SUCCESS,
    FETCH_SMURFS_FAILURE,

    POST_SMURF_START,
    POST_SMURF_SUCCESS,
    POST_SMURF_FAILURE
} from '../actions'


const initialState = {
    smurfs: null,
    error: '',
    isFetching: false,
    isPosting: false
};

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case FETCH_SMURFS_START:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                error: '',
                isFetching: false
            };
        case FETCH_SMURFS_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            };
        case POST_SMURF_START:
            return {
                ...state,
                isPosting: true
            };
        case POST_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                error: '',
                isPosting: false
            }
        case POST_SMURF_FAILURE:
            return {
                ...state,
                error: action.payload,
                isPosting: false
            }
        default:
            return state;
    }
}

export default reducer;