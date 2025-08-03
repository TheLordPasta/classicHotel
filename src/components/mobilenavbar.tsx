import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faRectangleXmark } from "@fortawesome/free-solid-svg-icons";
import "../styles/theme.css";
import "../styles/navbar.css";
import Logo from "../resources/logo-white.png";
import { useNavigate } from "react-router-dom";

const MobileNavbar = () => {
  const navigate = useNavigate();
  const [opened, setOpened] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="navbar-container">
      <div className="nav-logo-container">
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
          Rooms
        </button>
        <button className="navbar-btn">Button2</button>
        <button className="navbar-btn">Button3</button>
        <button className="navbar-btn">My Bookings</button>
        <button className="navbar-btn">Log In</button>
        <button className="navbar-btn">Sign Up</button>
        <button className="navbar-btn book-now">Book Now</button>
      </div>
    </div>
  );
};

export default MobileNavbar;
