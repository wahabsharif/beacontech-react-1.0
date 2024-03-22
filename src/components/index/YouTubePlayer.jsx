import React from "react";
import YouTube from "react-youtube";

class YouTubePlayer extends React.Component {
  render() {
    const videoId = "IgfMij3w7Pk";

    const opts = {
      height: "400",
      width: "100%",
      playerVars: {
        autoplay: 1, // Autoplay the video
        rel: 0, // Disable related videos
      },
    };

    return (
      <div>
        <YouTube videoId={videoId} opts={opts} />
      </div>
    );
  }
}

export default YouTubePlayer;
