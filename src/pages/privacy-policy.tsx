import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../styles/page-section.css";

const PrivacyPolicy = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "he"; // RTL detection

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const privacySections = t("privacyPage.sections", {
    returnObjects: true,
  }) as { title: string; items: string[] }[];

  return (
    <section
      className={`page-section ${isRTL ? "rtl" : ""}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <h1>{t("privacyPage.pageTitle")}</h1>
      <p>{t("privacyPage.introText")}</p>

      <ul className="accordion-list">
        {privacySections.map((section, index) => {
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
                  <ul>
                    {section.items.map((item, i) => (
                      <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                    ))}
                  </ul>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default PrivacyPolicy;
