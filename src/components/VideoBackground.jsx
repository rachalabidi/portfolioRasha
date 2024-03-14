import React from "react";

import "./style/VideoBackground.css";

const VideoBackground = () => {
  return (
    <div className="video-background">
      <video autoPlay loop muted playsInline>
        <source
          src={require("./64bc37ff639b1ab02514989b_Comp 1-transcode.mp4")}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
