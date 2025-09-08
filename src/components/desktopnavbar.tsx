import { useState, useEffect } from "react";
import "../styles/theme.css";
import "../styles/navbar.css";
import Logo from "../resources/logo-white.png";
import Header from "./header";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const DesktopNavbar: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`navbar-container ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-logo-container">
        <Header />
        <div className="navbar-divider"></div>
        <div className="navbar-logo">
          <img
            src={Logo}
            alt="Hotel Logo"
            onClick={() => navigate("/homePage")}
          />
        </div>
      </div>

      {/* Navbar Buttons */}
      <div className="navbar-buttons">
        <button
          className={`navbar-btn ${scrolled ? "scrolled" : ""}`}
          onClick={() => navigate("/rooms")}
        >
          {t("navbar.roomsButton")}
        </button>
        <button className={`navbar-btn ${scrolled ? "scrolled" : ""}`}>
          {t("navbar.aboutButton")}
        </button>
        <button className={`navbar-btn ${scrolled ? "scrolled" : ""}`}>
          {t("navbar.attractionsButton")}
        </button>
        <button className={`navbar-btn ${scrolled ? "scrolled" : ""}`}>
          {t("navbar.contactUsButton")}
        </button>
        <button className="navbar-btn book-now">
          {t("navbar.bookNowButton")}
        </button>
      </div>
    </div>
  );
};

export default DesktopNavbar;
