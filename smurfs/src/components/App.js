import React, { connect } from "react";
import "./App.css";
import SmurfsList from './SmurfsList'
import SmurfForm from "./SmurfForm";


function App() {
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      < SmurfsList />
      <SmurfForm />
    </div>
  );
}

export default App;
