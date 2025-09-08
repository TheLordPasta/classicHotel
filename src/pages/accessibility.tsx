import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../styles/page-section.css";

const Accessibility = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "he";

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [nestedActiveIndex, setNestedActiveIndex] = useState<number | null>(
    null
  );

  const toggleSection = (idx: number) =>
    setActiveIndex(activeIndex === idx ? null : idx);

  const toggleNested = (idx: number) =>
    setNestedActiveIndex(nestedActiveIndex === idx ? null : idx);

  const websiteFeatures = [
    {
      title: t("accessibilityPage.features.keyboardNavigationTitle"),
      content: (
        <p>{t("accessibilityPage.features.keyboardNavigationContent")}</p>
      ),
    },
    {
      title: t("accessibilityPage.features.semanticHtmlTitle"),
      content: <p>{t("accessibilityPage.features.semanticHtmlContent")}</p>,
    },
    {
      title: t("accessibilityPage.features.altTextTitle"),
      content: <p>{t("accessibilityPage.features.altTextContent")}</p>,
    },
    {
      title: t("accessibilityPage.features.contrastTitle"),
      content: <p>{t("accessibilityPage.features.contrastContent")}</p>,
    },
    {
      title: t("accessibilityPage.features.responsiveTitle"),
      content: <p>{t("accessibilityPage.features.responsiveContent")}</p>,
    },
    {
      title: t("accessibilityPage.features.formLabelsTitle"),
      content: <p>{t("accessibilityPage.features.formLabelsContent")}</p>,
    },
  ];

  const accessibilitySections = [
    {
      title: t("accessibilityPage.sections.buildingTitle"),
      content: (
        <ul>
          {(
            t("accessibilityPage.buildingFeatures", {
              returnObjects: true,
            }) as string[]
          ).map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      ),
    },
    {
      title: t("accessibilityPage.sections.websiteTitle"),
      content: null,
    },
  ];

  return (
    <section
      className={`page-section ${isRTL ? "rtl" : ""}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <h1>{t("accessibilityPage.pageTitle")}</h1>
      <p>{t("accessibilityPage.introText")}</p>

      <ul className="accordion-list">
        {accessibilitySections.map((section, index) => {
          const isActive = activeIndex === index;
          return (
            <li key={index} className="accordion-item">
              <button
                className={`accordion-title ${isActive ? "active" : ""}`}
                onClick={() => {
                  toggleSection(index);
                  if (index !== 1) setNestedActiveIndex(null);
                }}
                aria-expanded={isActive}
              >
                <span className="accordion-icon">{isActive ? "−" : "+"}</span>
                {section.title}
              </button>

              {isActive && index === 0 && (
                <div className="accordion-content">{section.content}</div>
              )}

              {isActive && index === 1 && (
                <div className="accordion-content">
                  <ul className="nested-accordion-list">
                    {websiteFeatures.map((feat, i) => {
                      const nestedOpen = nestedActiveIndex === i;
                      return (
                        <li key={i} className="nested-accordion-item">
                          <button
                            className={`nested-accordion-title ${
                              nestedOpen ? "active" : ""
                            }`}
                            onClick={() => toggleNested(i)}
                            aria-expanded={nestedOpen}
                          >
                            <span className="accordion-icon">
                              {nestedOpen ? "−" : "+"}
                            </span>
                            {feat.title}
                          </button>
                          {nestedOpen && (
                            <div className="nested-accordion-content">
                              {feat.content}
                            </div>
                          )}
                        </li>
                      );
                    })}
                  </ul>

                  <p>
                    {t("accessibilityPage.contactText")}{" "}
                    <a href={`mailto:${t("accessibilityPage.contactEmail")}`}>
                      {t("accessibilityPage.contactEmail")}
                    </a>{" "}
                    {t("accessibilityPage.contactFollowUp")}
                  </p>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Accessibility;
