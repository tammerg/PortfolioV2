import React, { Component } from "react";
import styled, { css } from "react-emotion";

class Welcome extends Component {
  render() {
    return (
      <div className="welcome">
        <h1>Welcome</h1>
        <p>
          I have always been fascinated by computers and technology in general.
          I started building my own PC's at a fairly young age and continued to
          grow that hobby throughout my childhood. When it came time to go to
          college, I began on a track for Medical School and graduated The Ohio
          State University with a Bachelors Degree in Biology. I realized that
          medicine wasn't the right fit for me and I had to follow my passion
          for technology. That's when I decided to start coding, and haven't
          looked back. I'm beyond excited for the journey ahead, and all the
          knowledge there is to attain.
        </p>
      </div>
    );
  }
}

export default Welcome;
