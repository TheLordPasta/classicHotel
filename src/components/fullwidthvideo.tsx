import React, { useEffect, useRef } from "react";
import VideoSrc from "../resources/TelAvivSkyline.mp4";
import LogoSvg from "../resources/images/newTinyLogoWhite.svg";
import "../styles/fullwidthvideo.css";
import { useLayoutContext } from "../contexts/LayoutContext";

const FullWidthVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const layout = useLayoutContext();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (videoRef.current) {
        const videoSpeed = 0.35;
        videoRef.current.style.transform = `translateY(${
          scrollY * videoSpeed
        }px)`;
      }

      if (logoRef.current) {
        const logoSpeed = 0.6; // closer → moves more
        logoRef.current.style.transform = `translate(-50%, -50%) translateY(${
          scrollY * logoSpeed
        }px)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="video-parallax-wrapper">
      {/* Background video */}
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

      {/* Foreground SVG */}
      <img
        src={layout.tinyLogo}
        alt="Overlay logo"
        className="video-overlay-logo"
      />
    </div>
  );
};

export default FullWidthVideo;
