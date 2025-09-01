import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/CookieDrawer.css";
import { loadTrackingScripts } from "../utils/loadTrackingScripts.js";

const COOKIE_CONSENT_KEY = "cookieConsentStatus";
const ENABLE_COOKIE_PERSISTENCE = true;

const CookieDrawer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const location = useLocation();

  // Track route changes only if consent is accepted
  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (consent === "true") {
      loadTrackingScripts(); // Sends page_view to /track
    }
  }, [location]);

  // Initial load: check consent and show drawer if needed
  useEffect(() => {
    const storedValue = localStorage.getItem(COOKIE_CONSENT_KEY);

    if (storedValue !== null) {
      setIsDismissed(true);
      if (storedValue === "true") {
        loadTrackingScripts(); // Sends initial page_view to /track
      }
      return;
    }

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleReject = () => {
    if (ENABLE_COOKIE_PERSISTENCE) {
      localStorage.setItem(COOKIE_CONSENT_KEY, "false");
    }
    setIsDismissed(true);
  };

  const handleAccept = () => {
    if (ENABLE_COOKIE_PERSISTENCE) {
      localStorage.setItem(COOKIE_CONSENT_KEY, "true");
    }
    setIsDismissed(true);
    loadTrackingScripts(); // Sends initial page_view to /track
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
