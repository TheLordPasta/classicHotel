import React, { useState } from "react";
import "../styles/accessibilitywidget.css";
import { useTranslation } from "react-i18next";
import { useLayoutContext } from "../contexts/LayoutContext";
import { useIsRTL } from "react-bootstrap/esm/ThemeProvider";

const AccessibilityWidget: React.FC = () => {
  const layout = useLayoutContext();
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "he";
  const [isOpen, setIsOpen] = useState(false);

  const [settings, setSettings] = useState({
    fontScale: 1,
    grayscale: false,
    highContrast: false,
    negativeContrast: false,
    underlineLinks: false,
    readableFont: false,
  });

  const toggleDrawer = () => setIsOpen(!isOpen);

  const applyFontScale = (scale: number) => {
    // Limit scale between 0.8x and 1.8x
    const minScale = 0.8; // 80% of default
    const maxScale = 1.8; // 180% of default
    const clamped = Math.min(maxScale, Math.max(minScale, scale));

    // Apply font size to root
    document.documentElement.style.fontSize = `${clamped * 16}px`;

    // Update state
    setSettings((prev) => ({ ...prev, fontScale: clamped }));
  };

  const toggleClass = (key: keyof typeof settings, className: string) => {
    const newValue = !settings[key];
    document.body.classList.toggle(className, newValue);
    setSettings((prev) => ({ ...prev, [key]: newValue }));
  };

  const resetAll = () => {
    document.documentElement.style.setProperty("--base-font-size", "22px");
    document.body.className = ""; // Remove all classes
    setSettings({
      fontScale: 1,
      grayscale: false,
      highContrast: false,
      negativeContrast: false,
      underlineLinks: false,
      readableFont: false,
    });
  };

  return (
    <>
      <img
        className={`accessibility-toggle ${isOpen ? "open" : ""} `}
        onClick={toggleDrawer}
        src={layout.AccessibilityIcon}
      ></img>

      <div
        className={`accessibility-drawer ${isOpen ? "open" : ""} ${
          isRTL ? "rtl" : ""
        }`}
      >
        <div className="accessibility-header">
          <p>{t("accessibilityWidget.accessibilityWidgetTitle")}</p>

          <img
            className="accessibility-icon"
            src={layout.AccessibilityIconRev}
          ></img>
        </div>
        <div className="accessibility-text">
          <p className="accessibility-subject">גודל גופן</p>
          <div className="accessibility-divider"></div>
          <div className={`accessibility-icons-grid ${isRTL ? "rtl" : ""}`}>
            <div className="icon-with-subtext">
              <button onClick={() => applyFontScale(settings.fontScale + 0.1)}>
                <img src={layout.accessibility}></img>
              </button>

              <p className="icon-side-note">
                {t("accessibilityWidget.increaseText")}
              </p>
            </div>
            <div className="icon-with-subtext">
              <button
                onClick={() =>
                  applyFontScale(Math.max(0.8, settings.fontScale - 0.1))
                }
              >
                <img src={layout.accessibility}></img>
              </button>

              <p className="icon-side-note">
                {t("accessibilityWidget.decreaseText")}
              </p>
            </div>
          </div>
        </div>

        {/*old 
        <ul>
          <li>
            <button onClick={() => applyFontScale(settings.fontScale + 0.1)}>
              {t("accessibilityWidget.increaseText")}
            </button>
          </li>
          <li>
            <button
              onClick={() =>
                applyFontScale(Math.max(0.8, settings.fontScale - 0.1))
              }
            >
              {t("accessibilityWidget.decreaseText")}
            </button>
          </li>
          <li>
            <button onClick={() => toggleClass("grayscale", "grayscale-mode")}>
              {t("accessibilityWidget.grayScale")}
            </button>
          </li>
          <li>
            <button
              onClick={() => toggleClass("highContrast", "high-contrast-mode")}
            >
              {t("accessibilityWidget.highContrast")}
            </button>
          </li>
          <li>
            <button onClick={layout.toggleTheme}>
              {t("accessibilityWidget.lightBackground")}
            </button>
          </li>
          <li>
            <button
              onClick={() =>
                toggleClass("underlineLinks", "underline-links-mode")
              }
            >
              {t("accessibilityWidget.linkUnderline")}
            </button>
          </li>
          <li>
            <button
              onClick={() => toggleClass("readableFont", "readable-font-mode")}
            >
              {t("accessibilityWidget.readableFont")}
            </button>
          </li>
          <li>
            <button className="reset" onClick={resetAll}>
              {t("accessibilityWidget.resetAll")}
            </button>
          </li>
        </ul>*/}
      </div>
    </>
  );
};

export default AccessibilityWidget;
