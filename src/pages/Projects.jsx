import React, { Component } from 'react';
import VideoBackground from "../components/VideoBackground";
import NavBar from "../components/NavBar";

class Projects extends Component {
    render() {
        return (
            <div>
            <div>
              <VideoBackground />
              <div className="content">
                <NavBar />
                <br></br>
      
              </div>
            </div>
          </div>
        );
    }
}

export default Projects;