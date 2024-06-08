import React from "react";
import YouTube from "react-youtube";
import PropTypes from "prop-types";

const videoOptions = {
  height: "100%",
  width: "100%",
  playerVars: {
    autoplay: 1,
    rel: 0,
  },
};

const YouTubePlayer = ({ videoId = "IgfMij3w7Pk" }) => {
  return (
    <div className="video-container">
      <YouTube videoId={videoId} opts={videoOptions} />
    </div>
  );
};

YouTubePlayer.propTypes = {
  videoId: PropTypes.string,
};

export default YouTubePlayer;
