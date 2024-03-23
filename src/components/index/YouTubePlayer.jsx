import React from "react";
import YouTube from "react-youtube";

class YouTubePlayer extends React.Component {
  render() {
    const videoId = "IgfMij3w7Pk";

    const opts = {
      height: "100%",
      width: "100%",
      playerVars: {
        autoplay: 1,
        rel: 0,
      },
    };

    return (
      <div className="video-container">
        <YouTube videoId={videoId} opts={opts} />
      </div>
    );
  }
}

export default YouTubePlayer;
