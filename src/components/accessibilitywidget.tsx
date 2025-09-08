import React, { useState } from "react";
import "../styles/accessibilitywidget.css";
import { useTranslation } from "react-i18next";

const AccessibilityWidget: React.FC = () => {
  const { t } = useTranslation();
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
        <h2>{t("accessibilityWidget.accessibilityWidgetTitle")}</h2>
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
            <button
              onClick={() =>
                toggleClass("negativeContrast", "negative-contrast-mode")
              }
            >
              {t("accessibilityWidget.negativeContrast")}
            </button>
          </li>
          <li>
            <button
              onClick={() => toggleClass("lightBackground", "light-bg-mode")}
            >
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
        </ul>
      </div>
    </>
  );
};

export default AccessibilityWidget;
