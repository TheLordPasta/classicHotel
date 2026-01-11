import React, { useEffect, useRef } from "react";
import VideoSrc from "../resources/TelAvivSkyline.mp4";
import "../styles/fullwidthvideo.css";

const FullWidthVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!videoRef.current) return;

      const scrollY = window.scrollY;
      const speed = 0.4; // 👈 parallax strength (0.2–0.5 is ideal)

      videoRef.current.style.transform = `translateY(${scrollY * speed}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="video-parallax-wrapper">
      <video
        ref={videoRef}
        className="video-container"
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
      >
        <source src={VideoSrc} type="video/mp4" />
      </video>
    </div>
  );
};

export default FullWidthVideo;
