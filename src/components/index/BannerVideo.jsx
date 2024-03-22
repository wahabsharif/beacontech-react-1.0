import React, { useState, useRef } from "react";
import { FiPause, FiPlay } from "react-icons/fi";

const BannerVideo = () => {
  const videoRef = useRef(null); // Ref to access the video element
  const [isPlaying, setIsPlaying] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
      setShowButton(false); // Hide the button when video starts playing
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
      setShowButton(true); // Show the button when video is paused
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false); // Set isPlaying to false when video ends
    setShowButton(true); // Show the button again when video ends
  };

  return (
    <>
      <div className="video-container">
        <video
          ref={videoRef}
          className="video-fullscreen"
          onEnded={handleVideoEnd}
        >
          <source src="video/waqar-jutt-bt-intro.webm" />
        </video>
        <div className="video-content">
          {showButton && ( // Render button conditionally based on showButton state
            <button onClick={handlePlayPause}>
              {isPlaying ? <FiPause /> : <FiPlay />}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default BannerVideo;
