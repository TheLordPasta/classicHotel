import React from "react";
import "../styles/theme.css";
import "../styles/navbar.css";
import DesktopNavbar from "./desktopnavbar";
import MobileNavbar from "./mobilenavbar";

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="desktop-navbar">
        <DesktopNavbar />
      </div>
      <div className="mobile-navbar">
        <MobileNavbar />
      </div>
    </div>
  );
};

export default Navbar;
