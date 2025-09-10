import React from "react";
import VideoSrc from "../resources/TelAvivSkyline.mp4";
import "../styles/fullwidthvideo.css";
console.log("Video Source:", VideoSrc);

const FullWidthVideo: React.FC = () => {
  return (
    <video className="video-container" autoPlay loop muted playsInline>
      <source src={VideoSrc} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default FullWidthVideo;
