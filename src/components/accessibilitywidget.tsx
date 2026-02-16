import React, { useState, useEffect } from "react";
import "../styles/accessibilitywidget.css";
import { useTranslation } from "react-i18next";
import { useLayoutContext } from "../contexts/LayoutContext";

import TextBig from "../resources/images/textbig.svg";
import TextSmall from "../resources/images/textSmall.svg";
import GreyScale from "../resources/images/greyScale.svg";
import HighContrast from "../resources/images/highContrast.svg";
import Links from "../resources/images/links.svg";
import ReadableFont from "../resources/images/readableFont.svg";
import reset from "../resources/images/reset.svg";

type AccessibilitySettings = {
  fontScale: number;
  grayscale: boolean;
  highContrast: boolean;
  negativeContrast: boolean;
  underlineLinks: boolean;
  readableFont: boolean;
};

const DEFAULT_SETTINGS: AccessibilitySettings = {
  fontScale: 1,
  grayscale: false,
  highContrast: false,
  negativeContrast: false,
  underlineLinks: false,
  readableFont: false,
};

const STORAGE_KEY = "accessibilitySettings";

const AccessibilityWidget: React.FC = () => {
  const layout = useLayoutContext();
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "he";

  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] =
    useState<AccessibilitySettings>(DEFAULT_SETTINGS);

  /* ----------------------------------
     Restore on load
  ---------------------------------- */
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return;

    const parsed: AccessibilitySettings = JSON.parse(saved);

    document.documentElement.style.fontSize = `${parsed.fontScale * 16}px`;

    if (parsed.grayscale) document.body.classList.add("grayscale-mode");
    if (parsed.highContrast) document.body.classList.add("high-contrast-mode");
    if (parsed.negativeContrast)
      document.body.classList.add("negative-contrast-mode");
    if (parsed.underlineLinks)
      document.body.classList.add("underline-links-mode");
    if (parsed.readableFont) document.body.classList.add("readable-font-mode");

    setSettings(parsed);
  }, []);

  /* ----------------------------------
     Persist on change
  ---------------------------------- */
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  }, [settings]);

  /* ----------------------------------
     Helpers
  ---------------------------------- */
  const toggleDrawer = () => setIsOpen((prev) => !prev);

  const applyFontScale = (scale: number) => {
    const min = 0.8;
    const max = 1.8;
    const clamped = Math.min(max, Math.max(min, scale));

    document.documentElement.style.fontSize = `${clamped * 16}px`;
    setSettings((prev) => ({ ...prev, fontScale: clamped }));
  };

  const toggleClass = (key: keyof AccessibilitySettings, className: string) => {
    const newValue = !settings[key];
    document.body.classList.toggle(className, newValue);
    setSettings((prev) => ({ ...prev, [key]: newValue }));
  };

  const resetAll = () => {
    document.documentElement.style.fontSize = "16px";

    document.body.classList.remove(
      "grayscale-mode",
      "high-contrast-mode",
      "negative-contrast-mode",
      "underline-links-mode",
      "readable-font-mode"
    );

    setSettings(DEFAULT_SETTINGS);
    localStorage.removeItem(STORAGE_KEY);
  };

  /* ----------------------------------
     Render
  ---------------------------------- */
  return (
    <>
      <img
        className={`accessibility-toggle ${isOpen ? "open" : ""}`}
        onClick={toggleDrawer}
        src={layout.AccessibilityIcon}
        alt="Accessibility"
      />

      <div
        className={`accessibility-drawer ${isOpen ? "open" : ""} ${
          isRTL ? "rtl" : ""
        }`}
        dir={isRTL ? "rtl" : "ltr"}
      >
        <div className="accessibility-header">
          <p>{t("accessibilityWidget.accessibilityWidgetTitle")}</p>
          <img src={layout.AccessibilityIcon} alt="" />
        </div>

        <div className="accessibility-text">
          {/* FONT SIZE */}
          <div className="accessibility-divider" />
          <p className="accessibility-subject">
            {t("accessibilityWidget.fontSize")}
          </p>
          <div className="accessibility-divider" />

          <div className="accessibility-icons-grid">
            <div
              className={`accessibility-icon-with-subtext ${
                settings.fontScale > 1 ? "active" : ""
              }`}
              onClick={() => applyFontScale(settings.fontScale + 0.1)}
            >
              <img src={TextBig} alt="" />
              <p>{t("accessibilityWidget.increaseText")}</p>
            </div>

            <div className="vertical-divider" />

            <div
              className={`accessibility-icon-with-subtext ${
                settings.fontScale < 1 ? "active" : ""
              }`}
              onClick={() => applyFontScale(settings.fontScale - 0.1)}
            >
              <img src={TextSmall} alt="" />
              <p>{t("accessibilityWidget.decreaseText")}</p>
            </div>
          </div>

          {/* CONTRAST */}
          <div className="accessibility-divider" />
          <p className="accessibility-subject">
            {t("accessibilityWidget.contrastColor")}
          </p>
          <div className="accessibility-divider" />

          <div className="accessibility-icons-grid">
            <div
              className={`accessibility-icon-with-subtext ${
                settings.grayscale ? "active" : ""
              }`}
              onClick={() => toggleClass("grayscale", "grayscale-mode")}
            >
              <img src={GreyScale} alt="" />
              <p>{t("accessibilityWidget.grayScale")}</p>
            </div>

            <div className="vertical-divider" />

            <div
              className={`accessibility-icon-with-subtext ${
                settings.highContrast ? "active" : ""
              }`}
              onClick={() => toggleClass("highContrast", "high-contrast-mode")}
            >
              <img src={HighContrast} alt="" />
              <p>{t("accessibilityWidget.highContrast")}</p>
            </div>
          </div>

          {/* EXTRA */}
          <div className="accessibility-divider" />
          <p className="accessibility-subject">
            {t("accessibilityWidget.moreTools")}
          </p>
          <div className="accessibility-divider" />

          <div className="accessibility-icons-grid">
            <div
              className={`accessibility-icon-with-subtext ${
                settings.underlineLinks ? "active" : ""
              }`}
              onClick={() =>
                toggleClass("underlineLinks", "underline-links-mode")
              }
            >
              <img src={Links} alt="" />
              <p>{t("accessibilityWidget.linkUnderline")}</p>
            </div>

            <div className="vertical-divider" />

            <div
              className={`accessibility-icon-with-subtext ${
                settings.readableFont ? "active" : ""
              }`}
              onClick={() => toggleClass("readableFont", "readable-font-mode")}
            >
              <img src={ReadableFont} alt="" />
              <p>{t("accessibilityWidget.readableFont")}</p>
            </div>

            <div className="vertical-divider" />

            <div className="accessibility-icon-with-subtext" onClick={resetAll}>
              <img src={reset} alt="" />
              <p>{t("accessibilityWidget.resetAll")}</p>
            </div>
          </div>

          <div className="accessibility-divider" />
        </div>
      </div>
    </>
  );
};

export default AccessibilityWidget;
