import { useState } from "react";
import { useTranslation } from "react-i18next";
import SectionAccordion from "../components/sectionAccordion";

const PrivacyPolicy = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "he"; // RTL detection

  type SectionItem = {
    title: string;
    items?: string[];
    paragraph?: string;
  };
  const sections = t("privacyPage.sections", {
    returnObjects: true,
  }) as SectionItem[];

  return (
    <div className="blue-wrapper">
      <div className="component-wrapper">
        <div
          className={`regulations-container ${isRTL ? "rtl" : ""}`}
          dir={isRTL ? "rtl" : "ltr"}
        >
          <p className="sub-header-regulations">{t("privacyPage.pageTitle")}</p>
          <p className="header-regulations">{t("privacyPage.introText")}</p>
          <div className="regulations-divider"></div>
          <div className="sectionAccordion-container">
            <SectionAccordion sections={sections} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
