import React, { useState, useRef } from "react";
import { FiPause, FiPlay } from "react-icons/fi";

const BannerVideo = () => {
  const videoRef = useRef(null); // Ref to access the video element
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      <div className="video-container">
        <video ref={videoRef} className="video-fullscreen">
          <source src="video/waqar-jutt-bt-intro.webm" />
        </video>
        <div className="video-content">
          <button onClick={handlePlayPause}>
            {isPlaying ? <FiPause /> : <FiPlay />}
          </button>
        </div>
      </div>
    </>
  );
};

export default BannerVideo;
