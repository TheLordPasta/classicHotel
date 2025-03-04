import React, { useState } from "react";
import "../styles/theme.css";
import "../styles/header.css";

const Header = () => {
  const [lang, setLang] = useState<string>("eng");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Handle language change and close the dropdown
  const handleLanguageChange = (newLang: string) => {
    setLang(newLang);
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <div className="header-container">
      <div
        className="dropdown"
        onMouseEnter={() => setIsOpen(true)} // Open on hover
        onMouseLeave={() => setIsOpen(false)} // Close on mouse leave
      >
        <button className="dropdown-button">{lang}</button>

        {isOpen && (
          <div className="dropdown-menu">
            <button onClick={() => handleLanguageChange("eng")}>
              English i18next or react-intl for lang switching
            </button>
            <button onClick={() => handleLanguageChange("heb")}>עברית</button>
            <button onClick={() => handleLanguageChange("fra")}>
              Français
            </button>
            <button onClick={() => handleLanguageChange("rus")}>Русский</button>
            <button onClick={() => handleLanguageChange("deu")}>Deutsch</button>
            <button onClick={() => handleLanguageChange("hin")}>हिन्दी</button>
            <button onClick={() => handleLanguageChange("chi")}>中文</button>
            <button onClick={() => handleLanguageChange("jpn")}>日本語</button>
            <button onClick={() => handleLanguageChange("por")}>
              Português
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
