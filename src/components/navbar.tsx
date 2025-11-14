// Navbar.tsx
import "../styles/theme.css";
import "../styles/navbar.css";
// Navbar.tsx
import { useLayoutContext } from "../contexts/LayoutContext";
import DesktopNavbar from "./desktopnavbar";
import MobileNavbar from "./mobilenavbar";

const Navbar = () => {
  const layout = useLayoutContext(); // shared state

  return (
    <div className="navbar-wrapper">
      <div className="desktop-navbar">
        <DesktopNavbar {...layout} />
      </div>
      <div className="mobile-navbar">
        <MobileNavbar {...layout} />
      </div>
    </div>
  );
};

export default Navbar;
