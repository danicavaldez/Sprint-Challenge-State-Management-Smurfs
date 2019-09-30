import axios from "axios";

export const FETCHING_SMURFS_START = "FETCHING_SMURFS_START";
export const FETCHING_SMURFS_SUCCESS = "FETCHING_SMURFS_SUCCESS";
export const FETCHING_SMURFS_FAILURE = "FETCHING_SMURFS_FAILURE";

export const POSTING_SMURF_START = "POSTING_SMURF_START";
export const POSTING_SMURF_SUCCESS = "POSTING_SMURF_SUCCESS";
export const POSTING_SMURF_FAILURE = "PSOTING_SMURF_FAILURE";

export const fetchSmurfs = () => dispatch => {
  dispatch({ type: FETCHING_SMURFS_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log(res.data);
      dispatch({ type: FETCHING_SMURFS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCHING_SMURFS_FAILURE, payload: err });
    });
};

export const createSmurf = smurfData => dispatch => {
  dispatch({ type: POSTING_SMURF_START });
  axios
    .post("http://localhost:3333/smurfs", {
      name: smurfData.name,
      age: smurfData.age,
      height: smurfData.height
    })
    .then(res => {
      console.log(res);
      dispatch({ type: POSTING_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: POSTING_SMURF_FAILURE, payload: err }));
};
