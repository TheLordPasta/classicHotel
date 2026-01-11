// useLayout.tsx
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

// Assets
import LogoBlack from "../resources/images/newLogoBlack.svg";
import LogoWhite from "../resources/images/newLogoWhite.svg";
import LogoBlackPNG from "../resources/images/logoBlack1x.png";
import LogoWhitePNG from "../resources/images/logoWhite1x.png";
import TinyLogoBlack from "../resources/images/newTinyLogoBlack.svg";
import TinyLogoWhite from "../resources/images/newTinyLogoWhite.svg";
import GlobusBlack from "../resources/images/globusBlack.svg";
import GlobusWhite from "../resources/images/globusWhite.svg";
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

export const useLayout = () => {
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

  // UI state
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Asset state
  const [tinyLogo, setTinyLogo] = useState(TinyLogoBlack);
  const [logo, setLogo] = useState(LogoBlack);
  const [bigLogo, setBigLogo] = useState(LogoBlackPNG);
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

  const [mappinIconRev, setMappinIconRev] = useState(MappinIconBlack);
  const [mailIconRev, setMailIconRev] = useState(MailIconBlack);
  const [phoneIconRev, setPhoneIconRev] = useState(PhoneIconBlack);

  // Themes
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

  /** Apply CSS variables + images */
  const applyTheme = (isDark: boolean) => {
    setDarkMode(isDark);
    localStorage.setItem("themeColor", isDark ? "dark" : "white");

    const theme = isDark ? darkTheme : lightTheme;
    Object.entries(theme).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });

    // Full theme asset swap
    setTinyLogo(isDark ? TinyLogoBlack : TinyLogoWhite);
    setBigLogo(isDark ? LogoWhitePNG : LogoBlackPNG);
    setGlobus(isDark ? GlobusWhite : GlobusBlack);
    setArrow(isDark ? ArrowWhite : ArrowBlack);

    setHamburgerIcon(isDark ? HamburgerIconWhite : HamburgerIconBlack);
    setHamburgerIconClose(
      isDark ? HamburgerIconCloseWhite : HamburgerIconCloseBlack
    );
    setCloseButtonSideMenu(
      isDark ? HamburgerIconCloseBlack : HamburgerIconCloseWhite
    );

    setMappinIcon(isDark ? MappinIconBlack : MappinIconWhite);
    setMailIcon(isDark ? MailIconBlack : MailIconWhite);
    setPhoneIcon(isDark ? PhoneIconBlack : PhoneIconWhite);

    setMappinIconRev(isDark ? MappinIconWhite : MappinIconBlack);
    setMailIconRev(isDark ? MailIconWhite : MailIconBlack);
    setPhoneIconRev(isDark ? PhoneIconWhite : PhoneIconBlack);
  };

  /** Load saved theme once */
  useEffect(() => {
    const savedTheme = localStorage.getItem("themeColor") === "dark";
    applyTheme(savedTheme);

    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /** Only logo changes when scrolling */
  useEffect(() => {
    const newLogo = scrolled
      ? darkMode
        ? TinyLogoWhite
        : TinyLogoBlack
      : darkMode
      ? LogoWhite
      : LogoBlack;

    setLogo(newLogo);
  }, [scrolled, darkMode]);

  // Actions
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("appLanguage", lng);
    setDropdownOpen(false);
  };

  return {
    scrolled,
    darkMode,
    menuOpen,
    dropdownOpen,
    isRTL,
    tinyLogo,
    logo,
    bigLogo,
    globus,
    arrow,
    hamburgerIcon,
    hamburgerIconClose,
    closeButtonSideMenu,
    mappinIcon,
    mailIcon,
    phoneIcon,
    mappinIconRev,
    mailIconRev,
    phoneIconRev,
    displayLang,
    changeLanguage,
    toggleDropdown: () => setDropdownOpen((s) => !s),
    toggleTheme: () => applyTheme(!darkMode),
    toggleMenu: () => setMenuOpen((s) => !s),
    navigate,
  };
};
