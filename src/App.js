import React, { Component } from "react";
import { render } from "react-dom";
import Router from "@reach/router";
import Navbar from "./components/Navbar/Navbar";
import Welcome from "./components/Welcome/Welcome";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Welcome />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
