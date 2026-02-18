import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import "../styles/CookieDrawer.css";
import {
  loadTrackingScripts,
  sendPageView,
  disableTracking,
  enableTracking,
} from "../utils/loadTrackingScripts";

const COOKIE_CONSENT_KEY = "cookieConsentStatus";

const CookieDrawer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const location = useLocation();
  const firstRender = useRef(true);

  // Track route changes ONLY if consent === true
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (consent === "true") {
      sendPageView(location.pathname);
    }
  }, [location]);

  // Initial load
  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);

    if (consent === "true") {
      loadTrackingScripts();
      setIsDismissed(true);
      return;
    }

    if (consent === "false") {
      disableTracking();
      setIsDismissed(true);
      return;
    }

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "true");
    enableTracking();
    loadTrackingScripts();
    setIsDismissed(true);
  };

  const handleReject = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "false");
    disableTracking();
    setIsDismissed(true);
  };

  if (isDismissed) return null;

  return (
    <div className={`consent-banner ${isVisible ? "show" : ""}`}>
      <p>
        We use cookies to improve your experience.{" "}
        <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
          Learn more
        </a>
      </p>
      <div className="consent-actions">
        <button className="consent-approve" onClick={handleAccept}>
          Got it
        </button>
        <button className="consent-reject" onClick={handleReject}>
          No thanks
        </button>
      </div>
    </div>
  );
};

export default CookieDrawer;
