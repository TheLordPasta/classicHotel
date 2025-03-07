import React from "react";
import "../styles/theme.css";
import "../styles/navbar.css";
import Logo from "../resources/ClassicHotelLogo.png";

const Navbar = () => {
  return (
    <div className="navbar-container">
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
        <button className="navbar-btn">Sign In</button>
        <button className="navbar-btn book-now">Book Now</button>
      </div>
    </div>
  );
};

export default Navbar;
