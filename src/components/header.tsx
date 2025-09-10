import "../styles/theme.css";
import "../styles/header.css";
import { useTranslation } from "react-i18next";

const Header: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const toggleLanguage = () => {
    const newLang = currentLang === "en" ? "he" : "en";
    localStorage.setItem("appLanguage", newLang);
    i18n.changeLanguage(newLang);
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
