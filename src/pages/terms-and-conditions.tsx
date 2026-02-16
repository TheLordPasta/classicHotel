import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../styles/regulationsPage.css";
import SectionAccordion from "../components/sectionAccordion";

const TermsAndConditions = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "he";
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  type SectionItem = {
    title: string;
    items?: string[];
    paragraph?: string;
  };
  const sections = t("termsPage.sections", {
    returnObjects: true,
  }) as SectionItem[];

  return (
    <div className="blue-wrapper">
      <div className="component-wrapper">
        <div
          className={`regulations-container ${isRTL ? "rtl" : ""}`}
          dir={isRTL ? "rtl" : "ltr"}
        >
          <p className="sub-header-regulations">{t("termsPage.pageTitle")}</p>
          <p className="header-regulations">{t("termsPage.introText")}</p>
          <div className="regulations-divider"></div>
          <div className="sectionAccordion-container">
            <SectionAccordion sections={sections} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
