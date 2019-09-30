import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchSmurfs } from "../store/actions";

function SmurfsList({ fetchSmurfs, isFetching, smurfs, error }) {
  useEffect(() => {
    fetchSmurfs();
  }, [fetchSmurfs]);

  if (isFetching) {
    return <h2> Finding Smurfs... </h2>;
  }

  return (
    <div>
      <h2>List of Smurfs</h2>
      {smurfs.map(smurf => {
        return (
          <div>
            <h3>Name: {smurf.name}</h3>
            <p>Age: {smurf.age}</p>
            <p>Height: {smurf.height}</p>
          </div>
        );
      })}
    </div>
  );
}
const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
    smurfs: state.smurfs,
    error: state.error
  }
}

export default connect(mapStateToProps, {fetchSmurfs})(SmurfsList);