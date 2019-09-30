import React, { useState } from "react";
import { connect } from "react-redux";
import { createSmurf } from "../store/actions";

const SmurfForm = ({ createSmurf }) => {
  const [data, setData] = useState("");

  const handleChanges = e => {
    e.preventDefault();
    return setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <form>
        <input type="text" name="name" onChange={handleChanges} />
        <input type="text" name="age" onChange={handleChanges} />
        <input type="text" name="height" onChange={handleChanges} />
        <button onClick={() => createSmurf(data)}>Add a Smurf!</button>
      </form>
    </>
  );
};

export default connect(
  null,
  { createSmurf }
)(SmurfForm);
