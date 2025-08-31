import React, { useEffect, useState } from "react";
import "../styles/CookieDrawer.css";
import { loadTrackingScripts } from "../utils/loadTrackingScripts.js";

const COOKIE_CONSENT_KEY = "cookieConsentStatus";
const ENABLE_COOKIE_PERSISTENCE = true; // ← flip to false in dev
localStorage.removeItem("cookieConsentStatus"); //for text

const GA_ID = "G-XXXXXXXXXX"; // ← Replace with your real GA4 ID
const PIXEL_ID = "123456789012345"; // ← Replace with your Meta Pixel ID

const CookieDrawer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (ENABLE_COOKIE_PERSISTENCE) {
      const storedValue = localStorage.getItem(COOKIE_CONSENT_KEY);

      if (storedValue !== null) {
        setIsDismissed(true);
        if (storedValue === "true") {
          loadTrackingScripts(); // Load trackers if accepted
        }
        return;
      }
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
    loadTrackingScripts({ gaId: GA_ID, pixelId: PIXEL_ID });
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
