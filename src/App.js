import React, { Component } from "react";
import { render } from "react-dom";
import Navbar from "./Navbar";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
