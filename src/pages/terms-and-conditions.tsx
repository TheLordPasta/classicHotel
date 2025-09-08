import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../styles/page-section.css";

const TermsAndConditions = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "he";
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const termsSections = t("termsPage.sections", { returnObjects: true }) as {
    title: string;
    items?: string[];
    paragraph?: string;
  }[];

  return (
    <section
      className={`page-section ${isRTL ? "rtl" : ""}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <h1>{t("termsPage.pageTitle")}</h1>
      <p>{t("termsPage.introText")}</p>

      <ul className="accordion-list">
        {termsSections.map((section, index) => {
          const isActive = activeIndex === index;
          return (
            <li key={index} className="accordion-item">
              <button
                className={`accordion-title ${isActive ? "active" : ""}`}
                onClick={() => toggleSection(index)}
                aria-expanded={isActive}
              >
                <span className="accordion-icon">{isActive ? "−" : "+"}</span>
                {section.title}
              </button>
              {isActive && (
                <div className="accordion-content">
                  {section.items && (
                    <ul>
                      {section.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {section.paragraph && <p>{section.paragraph}</p>}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default TermsAndConditions;
