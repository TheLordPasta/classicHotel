import "../styles/theme.css";
import "../styles/header.css";
import { useTranslation } from "react-i18next";

const Header: React.FC = () => {
  const { i18n: i18nextInstance } = useTranslation();
  const currentLang = i18nextInstance.language;

  const toggleLanguage = () => {
    const newLang = currentLang === "en" ? "he" : "en";
    localStorage.setItem("appLanguage", newLang); // ✅ Save first
    i18nextInstance.changeLanguage(newLang).then(() => {});
  };

  return (
    <div className="header-container">
      <div className="language-toggle">
        <button onClick={toggleLanguage}>
          {currentLang === "en" ? "HE" : "EN"}
        </button>
      </div>
    </div>
  );
};

export default Header;
