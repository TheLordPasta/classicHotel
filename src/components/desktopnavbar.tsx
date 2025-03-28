import { useState, useEffect } from "react";
import "../styles/theme.css";
import "../styles/navbar.css";
import Logo from "../resources/ClassicHotelLogo.png";

const DesktopNavbar = () => {
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
          <img src={Logo} alt="Hotel Logo" />
        </div>
      </div>

      {/* Navbar Buttons */}
      <div className="navbar-buttons">
        <button className="navbar-btn">Button1</button>
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

export default DesktopNavbar;
