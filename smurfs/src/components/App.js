import React, { Component } from "react";
import "./App.css";
import SmurfsList from './SmurfsList';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS!</h1>
        <SmurfsList />
      </div>
    );
  }
}

export default App;
