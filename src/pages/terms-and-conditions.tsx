import { useState } from "react";
import "../styles/page-section.css";

const termsSections = [
  {
    title: "Reservations & Payments",
    content: (
      <ul>
        <li>All reservations are subject to availability and confirmation.</li>
        <li>
          Payment must be completed prior to check-in unless otherwise agreed.
        </li>
        <li>Cancellation policies vary by rate and season.</li>
      </ul>
    ),
  },
  {
    title: "Guest Responsibilities",
    content: (
      <ul>
        <li>Guests must comply with hotel rules and respect other guests.</li>
        <li>Damage to property may result in additional charges.</li>
      </ul>
    ),
  },
  {
    title: "Privacy & Data",
    content: (
      <p>
        We respect your privacy. Personal data collected during booking is
        handled in accordance with our privacy policy.
      </p>
    ),
  },
];

const TermsAndConditions = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="page-section">
      <h1>Terms & Conditions</h1>
      <p>
        These Terms & Conditions govern your use of Tailor Hotel’s website and
        services. By accessing or booking with us, you agree to the following
        terms:
      </p>

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
                <div className="accordion-content">{section.content}</div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default TermsAndConditions;
