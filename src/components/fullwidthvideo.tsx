import React from "react";
import VideoSrc from "../resources/TelAvivSkyline.mp4";
console.log("Video Source:", VideoSrc);

const FullWidthVideo: React.FC = () => {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      style={{
        width: "100%",
        height: "30%",
        marginTop: "-400px",
        objectFit: "cover",
        position: "relative",
        top: 0,
        left: 0,
        zIndex: 0, // Sends it to the background
      }}
    >
      <source src={VideoSrc} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default FullWidthVideo;
