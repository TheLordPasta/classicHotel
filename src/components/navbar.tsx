import { useEffect, useState } from "react";
import "../styles/theme.css";
import "../styles/navbar.css";

import DesktopNavbar from "./desktopnavbar";
import MobileNavbar from "./mobilenavbar";

import LogoBlack from "../resources/images/newLogoBlack.svg";
import LogoWhite from "../resources/images/newLogoWhite.svg";
import tinyLogoBlack from "../resources/images/newTinyLogoBlack.svg";
import tinyLogoWhite from "../resources/images/newTinyLogoWhite.svg";
import GlobusBlack from "../resources/images/globusBlack.svg";
import Globuswhite from "../resources/images/globusWhite.svg";
import ArrowBlack from "../resources/images/arrowBlack.svg";
import ArrowWhite from "../resources/images/arrowWhite.svg";
import HamburgerIconBlack from "../resources/images/hamburgerIcon.svg";
import HamburgerIconCloseBlack from "../resources/images/hamburgerIconClose.svg";
import HamburgerIconWhite from "../resources/images/hamburgerIconWhite.svg";
import HamburgerIconCloseWhite from "../resources/images/hamburgerIconCloseWhite.svg";
import MappinIconWhite from "../resources/images/map-pinIconWhite.svg";
import MappinIconBlack from "../resources/images/map-pinIconBlack.svg";
import PhoneIconWhite from "../resources/images/phoneIconWhite.svg";
import PhoneIconBlack from "../resources/images/phoneIconBlack.svg";
import MailIconWhite from "../resources/images/mailIconWhite.svg";
import MailIconBlack from "../resources/images/mailIconBlack.svg";

import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const isRTL = i18n.language === "he";
  const currentLang = i18n.language;
  const langLabels: Record<string, string> = {
    en: "English",
    he: "עברית",
    es: "Español",
    fr: "Français",
  };
  const displayLang = langLabels[currentLang] || currentLang;

  // shared UI state
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // shared assets state
  const [logo, setLogo] = useState(LogoBlack);
  const [globus, setGlobus] = useState(GlobusBlack);
  const [arrow, setArrow] = useState(ArrowBlack);
  const [hamburgerIcon, setHamburgerIcon] = useState(HamburgerIconBlack);
  const [hamburgerIconClose, setHamburgerIconClose] = useState(
    HamburgerIconCloseBlack
  );
  const [closeButtonSideMenu, setCloseButtonSideMenu] = useState(
    HamburgerIconCloseWhite
  );
  const [mappinIcon, setMappinIcon] = useState(MappinIconWhite);
  const [mailIcon, setMailIcon] = useState(MailIconWhite);
  const [phoneIcon, setPhoneIcon] = useState(PhoneIconWhite);

  // theme CSS variables
  const darkTheme = {
    "--hotel-background": "#000000",
    "--side-menu-background": "#ffffff",
    "--text-color": "#ffffff",
    "--border-color": "#ffffff",
    "--other-container-background": "#d1e7fe",
  };
  const lightTheme = {
    "--hotel-background": "#ffffff",
    "--side-menu-background": "#000000",
    "--text-color": "#000000",
    "--border-color": "#ffffff00",
    "--other-container-background": "#d1e7fe33",
  };

  // language change
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("appLanguage", lng);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => setDropdownOpen((s) => !s);
  const toggleMenu = () => setMenuOpen((s) => !s);

  // initialize theme and scroll listener on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("themeColor") || "white";
    setDarkMode(savedTheme === "dark");
    applyThemeColors(savedTheme === "dark" ? darkTheme : lightTheme);

    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // keep logo in sync with scrolled + darkMode
  useEffect(() => {
    if (scrolled) setLogo(darkMode ? tinyLogoWhite : tinyLogoBlack);
    else setLogo(darkMode ? LogoWhite : LogoBlack);
  }, [scrolled, darkMode]);

  const applyThemeColors = (theme: Record<string, string>) => {
    Object.entries(theme).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
  };

  const toggleTheme = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("themeColor", newMode ? "dark" : "white");

      // update assets in one place
      setLogo(
        scrolled
          ? newMode
            ? tinyLogoWhite
            : tinyLogoBlack
          : newMode
          ? LogoWhite
          : LogoBlack
      );
      setGlobus(newMode ? Globuswhite : GlobusBlack);
      setArrow(newMode ? ArrowWhite : ArrowBlack);
      setHamburgerIcon(newMode ? HamburgerIconWhite : HamburgerIconBlack);
      setHamburgerIconClose(
        newMode ? HamburgerIconCloseWhite : HamburgerIconCloseBlack
      );
      setCloseButtonSideMenu(
        newMode ? HamburgerIconCloseBlack : HamburgerIconCloseWhite
      );
      setMappinIcon(newMode ? MappinIconBlack : MappinIconWhite);
      setMailIcon(newMode ? MailIconBlack : MailIconWhite);
      setPhoneIcon(newMode ? PhoneIconBlack : PhoneIconWhite);

      applyThemeColors(newMode ? darkTheme : lightTheme);
      return newMode;
    });
  };

  // props object passed to both desktop/mobile
  const sharedProps = {
    scrolled,
    darkMode,
    menuOpen,
    dropdownOpen,
    isRTL,
    logo,
    globus,
    arrow,
    hamburgerIcon,
    hamburgerIconClose,
    closeButtonSideMenu,
    mappinIcon,
    mailIcon,
    phoneIcon,
    displayLang,
    changeLanguage,
    toggleDropdown,
    toggleTheme,
    toggleMenu,
    navigate,
  };

  return (
    <div className="navbar-wrapper">
      <div className="desktop-navbar">
        <DesktopNavbar {...sharedProps} />
      </div>
      <div className="mobile-navbar">
        <MobileNavbar {...sharedProps} />
      </div>
    </div>
  );
};

export default Navbar;
