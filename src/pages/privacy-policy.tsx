import { useState } from "react";
import "../styles/page-section.css";

const privacySections = [
  {
    title: "Data Collection",
    content: (
      <ul>
        <li>
          We collect non-personal data such as browser type, device info, and
          pages visited to improve site performance.
        </li>
        <li>
          Personal data (e.g., name, email) is only collected when you
          voluntarily submit it via forms or account registration.
        </li>
        <li>
          We do not collect sensitive personal data unless explicitly required
          and consented to.
        </li>
      </ul>
    ),
  },
  {
    title: "Legal Basis for Processing",
    content: (
      <ul>
        <li>
          We process personal data based on your consent, contractual necessity,
          legal obligations, or legitimate interests.
        </li>
        <li>
          You may withdraw your consent at any time without affecting the
          lawfulness of prior processing.
        </li>
      </ul>
    ),
  },
  {
    title: "Cookies & Tracking",
    content: (
      <ul>
        <li>
          We use cookies to remember preferences, analyze traffic, and improve
          user experience.
        </li>
        <li>Google Analytics tracks usage patterns anonymously.</li>
        <li>
          Meta Pixel helps us measure ad performance and retarget visitors.
        </li>
        <li>
          Tracking scripts are only activated after you accept cookies via our
          cookie drawer.
        </li>
      </ul>
    ),
  },
  {
    title: "Third-Party Services",
    content: (
      <ul>
        <li>
          We use Google and Meta platforms for analytics and advertising
          insights.
        </li>
        <li>
          These services may store cookies or use similar technologies on your
          device.
        </li>
        <li>
          We do not sell personal data. We only share data when legally required
          or with your explicit consent.
        </li>
      </ul>
    ),
  },
  {
    title: "International Data Transfers",
    content: (
      <ul>
        <li>
          Your data may be transferred to and processed in countries outside
          your jurisdiction.
        </li>
        <li>
          We implement appropriate safeguards to ensure your data is protected
          in accordance with applicable laws.
        </li>
      </ul>
    ),
  },
  {
    title: "Data Retention",
    content: (
      <ul>
        <li>
          We retain personal data only as long as necessary for the purposes
          described or as required by law.
        </li>
        <li>
          Retention periods vary depending on the nature of the data and legal
          obligations.
        </li>
      </ul>
    ),
  },
  {
    title: "Your Rights",
    content: (
      <ul>
        <li>
          You have the right to access, correct, delete, or restrict your
          personal data.
        </li>
        <li>
          You may request data portability or object to certain types of
          processing.
        </li>
        <li>
          California residents may opt out of the sale of personal information.
        </li>
        <li>
          To exercise these rights, contact us at:{" "}
          <strong>privacy@yourdomain.com</strong>
        </li>
      </ul>
    ),
  },
  {
    title: "User Control",
    content: (
      <ul>
        <li>
          You can accept or decline cookies via the cookie drawer on our site.
        </li>
        <li>
          Declining cookies disables tracking scripts and analytics tools.
        </li>
        <li>
          You may request deletion of any personal data you’ve submitted via
          contact forms.
        </li>
      </ul>
    ),
  },
  {
    title: "Policy Updates",
    content: (
      <ul>
        <li>
          We may update this Privacy Policy periodically. Changes will be posted
          on this page with a revised date.
        </li>
        <li>
          We encourage you to review this policy regularly to stay informed.
        </li>
      </ul>
    ),
  },
];

const PrivacyPolicy = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="page-section">
      <h1>Privacy Policy</h1>
      <p>
        This Privacy Policy explains how we collect, use, and protect your
        personal data when you visit our website. By using our site, you agree
        to the practices described below, in accordance with GDPR and CCPA
        regulations.
      </p>

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
                <div className="accordion-content">{section.content}</div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default PrivacyPolicy;
