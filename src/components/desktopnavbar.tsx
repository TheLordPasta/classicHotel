import React from "react";
import { useTranslation } from "react-i18next";

type Props = {
  scrolled: boolean;
  darkMode: boolean;
  menuOpen: boolean;
  dropdownOpen: boolean;
  isRTL: boolean;
  logo: string;
  globus: string;
  arrow: string;
  hamburgerIcon: string;
  hamburgerIconClose: string;
  closeButtonSideMenu: string;
  mappinIcon: string;
  mailIcon: string;
  phoneIcon: string;
  displayLang: string;
  changeLanguage: (lng: string) => void;
  toggleDropdown: () => void;
  toggleTheme: () => void;
  toggleMenu: () => void;
  navigate: (path: string) => void;
};

const DesktopNavbar: React.FC<Props> = (props) => {
  const { t } = useTranslation();

  return (
    <>
      <div className={`navbar-container ${props.scrolled ? "scrolled" : ""}`}>
        <div className="color-theme-and-language-container">
          <div className="color-theme-button" onClick={props.toggleTheme}>
            <span className="theme-dot"></span>
          </div>

          <div className="language-picker">
            <button
              className="dropdown-toggle-new"
              onClick={props.toggleDropdown}
            >
              <div className="globus-container">
                <img src={props.globus} alt="Globus" />
              </div>
              <div className="language-picker-text">{props.displayLang}</div>
              <img
                src={props.arrow}
                alt="arrow"
                className={`arrow-icon ${props.dropdownOpen ? "open" : ""}`}
              />
            </button>

            <ul
              className={`dropdown-menu-new ${
                props.dropdownOpen ? "show" : ""
              }`}
            >
              <li onClick={() => props.changeLanguage("en")}>English</li>
              <div className="dropdown-divider"></div>
              <li onClick={() => props.changeLanguage("he")}>עברית</li>
              <div className="dropdown-divider"></div>
              <li onClick={() => props.changeLanguage("es")}>Español</li>
              <div className="dropdown-divider"></div>
              <li onClick={() => props.changeLanguage("fr")}>Français</li>
            </ul>
          </div>
        </div>

        <div className="nav-logo-container">
          <div className="navbar-divider"></div>
          <div className="navbar-logo">
            <img
              src={props.logo}
              alt="Hotel Logo"
              onClick={() => props.navigate("/homePage")}
            />
          </div>
        </div>

        <div className="hamburger-buttons" onClick={props.toggleMenu}>
          <div className="hamburger-icon">
            {props.menuOpen ? (
              <img src={props.hamburgerIconClose} alt="Close menu" />
            ) : (
              <img src={props.hamburgerIcon} alt="Open menu" />
            )}
          </div>
        </div>
      </div>

      <div
        className={`side-menu ${props.menuOpen ? "open" : ""} ${
          props.scrolled ? "scrolled" : ""
        } ${props.isRTL ? "rtl" : ""}`}
      >
        <div className="side-menu-header">
          <div className="close-button" onClick={props.toggleMenu}>
            <img src={props.closeButtonSideMenu} alt="Close menu" />
          </div>
        </div>

        <div className={`side-menu-content ${props.isRTL ? "rtl" : ""}`}>
          <div className="side-menu-item">
            <p>{t("navbar.homeButton")}</p>
          </div>
          <div className="side-menu-item">
            <p>{t("navbar.roomsButton")}</p>
          </div>
          <div className="side-menu-item">
            <p>{t("navbar.locationButton")}</p>
          </div>
          <div className="side-menu-item">
            <p>{t("navbar.hotelServicesButton")}</p>
          </div>
          <div className="side-menu-item">
            <p>{t("navbar.contactUsButton")}</p>
          </div>
        </div>

        <div className={`side-menu-footer-contact ${props.isRTL ? "rtl" : ""}`}>
          <div className="side-menu-footer-item">
            <img src={props.mappinIcon} alt="map" />
            <span> {t("navbar.addressText")}</span>
          </div>
          <div className="side-menu-footer-divider"></div>
          <div className="side-menu-footer-item">
            <img src={props.mailIcon} alt="mail" />
            <a href="mailto:hello@tailorhotel.com"> hello@thetailortlv.com</a>
          </div>
          <div className="side-menu-footer-divider"></div>
          <div className="side-menu-footer-item">
            <img src={props.phoneIcon} alt="phone" />
            <span className="contact-info"> +972-6598394</span>
          </div>
          <div className="side-menu-footer-divider"></div>
        </div>

        <div
          className={`side-menu-footer-policies ${props.isRTL ? "rtl" : ""}`}
        >
          <div className="side-menu-policy-item">
            <a>Cancellation Policy</a>
          </div>
          <div className="side-menu-policy-divider"></div>
          <div className="side-menu-policy-item">
            <a>Update Reservation</a>
          </div>
          <div className="side-menu-policy-divider"></div>
          <div className="side-menu-policy-item">
            <a>Accessibility Statement</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopNavbar;
