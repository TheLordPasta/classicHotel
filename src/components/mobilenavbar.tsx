import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faRectangleXmark } from "@fortawesome/free-solid-svg-icons";
import "../styles/theme.css";
import "../styles/navbar.css";
import Logo from "../resources/ClassicHotelLogo.png";

const MobileNavbar = () => {
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
        <div className="navbar-logo">
          <img src={Logo} alt="Hotel Logo" />
        </div>
      </div>
      {opened ? Close : Hamburger}

      {/* Always render this div, just toggle the 'open' class */}
      <div className={`navbar-buttons ${opened ? "open" : ""}`}>
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

export default MobileNavbar;
