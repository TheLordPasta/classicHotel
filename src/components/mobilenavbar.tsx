import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faRectangleXmark } from "@fortawesome/free-solid-svg-icons";
import "../styles/theme.css";
import "../styles/navbar.css";
import Logo from "../resources/logo-white.png";
import { useNavigate } from "react-router-dom";
import Header from "./header";
import { useTranslation } from "react-i18next";

const MobileNavbar: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [opened, setOpened] = useState(false);

  const Hamburger = (
    <FontAwesomeIcon
      className="hamburger-menu"
      icon={faBars}
      size="2x"
      color="#c4a484"
      onClick={() => setOpened(!opened)}
    />
  );
  const Close = (
    <FontAwesomeIcon
      className="close-menu"
      icon={faRectangleXmark}
      size="2x"
      color="#c4a484"
      onClick={() => setOpened(!opened)}
    />
  );

  return (
    <div className="navbar-container">
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
      {opened ? Close : Hamburger}

      {/* Always render this div, just toggle the 'open' class */}
      <div className={`navbar-buttons ${opened ? "open" : ""}`}>
        <button className="navbar-btn" onClick={() => navigate("/rooms")}>
          {t("navbar.roomsButton")}
        </button>

        <button className="navbar-btn">{t("navbar.aboutButton")}</button>
        <button className="navbar-btn">{t("navbar.attractionsButton")}</button>
        <button className="navbar-btn">{t("navbar.contactUsButton")}</button>
        <button className="navbar-btn book-now">
          {t("navbar.bookNowButton")}
        </button>
      </div>
    </div>
  );
};

export default MobileNavbar;
