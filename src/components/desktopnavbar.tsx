import { useState, useEffect } from "react";
import "../styles/theme.css";
import "../styles/navbar.css";
import Logo from "../resources/logo-white.png";
import { useNavigate } from "react-router-dom";

const DesktopNavbar = () => {
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
          Rooms
        </button>
        <button className={`navbar-btn ${scrolled ? "scrolled" : ""}`}>
          Button2
        </button>
        <button className={`navbar-btn ${scrolled ? "scrolled" : ""}`}>
          Button3
        </button>
        <button className={`navbar-btn ${scrolled ? "scrolled" : ""}`}>
          My Bookings
        </button>
        <button className={`navbar-btn ${scrolled ? "scrolled" : ""}`}>
          Log In
        </button>
        <button className={`navbar-btn ${scrolled ? "scrolled" : ""}`}>
          Sign Up
        </button>
        <button className="navbar-btn book-now">Book Now</button>
      </div>
    </div>
  );
};

export default DesktopNavbar;
