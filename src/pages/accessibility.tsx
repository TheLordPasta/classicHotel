import { useState } from "react";
import "../styles/page-section.css";

const accessibilitySections = [
  {
    title: "Building Accessibility",
    content: (
      <ul>
        <li>Designated handicapped parking spaces near the entrance</li>
        <li>Accessible reception desk and service counters</li>
        <li>Wheelchair-accessible restrooms in the lobby</li>
        <li>Clear signage for navigation and identification</li>
        <li>Service animals are welcome throughout the property</li>
        <li>Staff assistance available for form completion and guidance</li>
      </ul>
    ),
  },
  {
    title: "Website Accessibility",
    content: (
      <p>
        Our website is designed to meet WCAG 2.1 AA standards. If you encounter
        any accessibility issues, please contact us at{" "}
        <a href="mailto:hello@tailorhotel.com">hello@tailorhotel.com</a>.
      </p>
    ),
  },
];

const Accessibility = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="page-section">
      <h1>Accessibility at Tailor Hotel</h1>
      <p>
        Tailor Hotel is committed to providing respectful, inclusive, and
        accessible service to all guests. In accordance with the Equal Rights
        for People with Disabilities Law (1998), we continuously invest in
        making our facilities and services accessible.
      </p>

      <ul className="accordion-list">
        {accessibilitySections.map((section, index) => {
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
                <div className="accordion-content">{section.content}</div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Accessibility;
