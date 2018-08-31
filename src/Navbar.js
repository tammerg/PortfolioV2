import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="navBar">
          <span>
            <a className="brand" href="/">
              Tammer Galal
            </a>
          </span>
          <span>
            <a className="GitHub" href="https://github.com/tammerg">
              GitHub
            </a>
          </span>
        </div>
      </React.Fragment>
    );
  }
}

export default Navbar;
