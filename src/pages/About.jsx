import React, { Component } from "react";
import VideoBackground from "../components/VideoBackground";
import NavBar from "../components/NavBar";
import Typo from "../components/Typo";
import Media from "../components/Media";

class About extends Component {
  render() {
    return (
      <div>
        <div>
          <VideoBackground />
          <div className="content">
            <NavBar />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
