import {
  FETCHING_SMURFS_START,
  FETCHING_SMURFS_SUCCESS,
  FETCHING_SMURFS_FAILURE,
  POSTING_SMURF_START,
  POSTING_SMURF_SUCCESS,
  POSTING_SMURF_FAILURE
} from "../actions";

const initialState = {
  smurfs: [],
  isFetching: "false",
  isPosting: "false",
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS_START:
      return {
        ...state,
        isFetching: true
      };
    case FETCHING_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isFetching: false,
        error: ""
      };
    case FETCHING_SMURFS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    case POSTING_SMURF_START:
      return {
        ...state,
        isPosting: "true"
      }
      case POSTING_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: [...state.smurfs, action.payload],
        isPosting: false,
        error: ""
      }
      case POSTING_SMURF_FAILURE:
      return {
        error: action.payload
      }
    default:
      return state;
  }
};

export default reducer;
