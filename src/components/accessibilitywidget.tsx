import React, { useState } from "react";
import "../styles/accessibilitywidget.css";

const AccessibilityWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState({
    fontScale: 1,
    grayscale: false,
    highContrast: false,
    negativeContrast: false,
    lightBackground: false,
    underlineLinks: false,
    readableFont: false,
  });

  const toggleDrawer = () => setIsOpen(!isOpen);

  const applyFontScale = (scale: number) => {
    document.documentElement.style.setProperty(
      "--base-font-size",
      `${scale * 22}px`
    );
    setSettings((prev) => ({ ...prev, fontScale: scale }));
  };

  const toggleClass = (key: keyof typeof settings, className: string) => {
    const newValue = !settings[key];

    // Exclusivity logic
    if (key === "highContrast" && newValue) {
      document.body.classList.remove(
        "negative-contrast-mode",
        "light-bg-mode",
        "grayscale-mode"
      );
      setSettings((prev) => ({
        ...prev,
        negativeContrast: false,
        lightBackground: false,
        grayscale: false,
      }));
    }

    if (key === "negativeContrast" && newValue) {
      document.body.classList.remove(
        "high-contrast-mode",
        "light-bg-mode",
        "grayscale-mode"
      );
      setSettings((prev) => ({
        ...prev,
        highContrast: false,
        lightBackground: false,
        grayscale: false,
      }));
    }

    if (key === "lightBackground" && newValue) {
      document.body.classList.remove(
        "high-contrast-mode",
        "negative-contrast-mode",
        "grayscale-mode"
      );
      setSettings((prev) => ({
        ...prev,
        highContrast: false,
        negativeContrast: false,
        grayscale: false,
      }));
    }

    if (key === "grayscale" && newValue) {
      document.body.classList.remove(
        "high-contrast-mode",
        "negative-contrast-mode",
        "light-bg-mode"
      );
      setSettings((prev) => ({
        ...prev,
        highContrast: false,
        negativeContrast: false,
        lightBackground: false,
      }));
    }

    document.body.classList.toggle(className, newValue);
    setSettings((prev) => ({ ...prev, [key]: newValue }));
  };

  const resetAll = () => {
    document.documentElement.style.setProperty("--base-font-size", "22px");
    document.body.className = "";
    setSettings({
      fontScale: 1,
      grayscale: false,
      highContrast: false,
      negativeContrast: false,
      lightBackground: false,
      underlineLinks: false,
      readableFont: false,
    });
  };

  return (
    <>
      <button
        className={`accessibility-toggle ${isOpen ? "open" : ""}`}
        onClick={toggleDrawer}
      >
        ♿
      </button>

      <div className={`accessibility-drawer ${isOpen ? "open" : ""}`}>
        <h2>Accessibility Tools</h2>
        <ul>
          <li>
            <button onClick={() => applyFontScale(settings.fontScale + 0.1)}>
              Increase Text
            </button>
          </li>
          <li>
            <button
              onClick={() =>
                applyFontScale(Math.max(0.8, settings.fontScale - 0.1))
              }
            >
              Decrease Text
            </button>
          </li>
          <li>
            <button
              className={settings.grayscale ? "isActive" : ""}
              onClick={() => toggleClass("grayscale", "grayscale-mode")}
            >
              Grayscale
            </button>
          </li>
          <li>
            <button
              className={settings.highContrast ? "isActive" : ""}
              onClick={() => toggleClass("highContrast", "high-contrast-mode")}
            >
              High Contrast
            </button>
          </li>
          <li>
            <button
              className={settings.negativeContrast ? "isActive" : ""}
              onClick={() =>
                toggleClass("negativeContrast", "negative-contrast-mode")
              }
            >
              Negative Contrast
            </button>
          </li>
          <li>
            <button
              className={settings.lightBackground ? "isActive" : ""}
              onClick={() => toggleClass("lightBackground", "light-bg-mode")}
            >
              Light Background
            </button>
          </li>
          <li>
            <button
              className={settings.underlineLinks ? "isActive" : ""}
              onClick={() =>
                toggleClass("underlineLinks", "underline-links-mode")
              }
            >
              Links Underline
            </button>
          </li>
          <li>
            <button
              className={settings.readableFont ? "isActive" : ""}
              onClick={() => toggleClass("readableFont", "readable-font-mode")}
            >
              Readable Font
            </button>
          </li>
          <li>
            <button className="reset" onClick={resetAll}>
              Reset All
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AccessibilityWidget;
