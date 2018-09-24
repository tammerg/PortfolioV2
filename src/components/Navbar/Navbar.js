import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="navBar">
          <span>
            <a className="brand hvr-pulse" href="/">
              Tammer Galal
            </a>
          </span>
          <span>
            <a
              className="LinkedIn hvr-pulse"
              href="https://www.linkedin.com/in/tammergalal/"
            >
              LinkedIn
            </a>
            <a className="GitHub hvr-pulse" href="https://github.com/tammerg">
              GitHub
            </a>
          </span>
        </div>
      </React.Fragment>
    );
  }
}

export default Navbar;
