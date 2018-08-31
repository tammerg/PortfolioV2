import React, { Component } from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import Navbar from "./Navbar";
import FaceCheck from "./FaceCheck/components/FaceCheck";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Router>
          <FaceCheck path="/face" />
        </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
