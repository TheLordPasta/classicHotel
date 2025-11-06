import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./i18n";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Footer from "./components/footer";
import NotFound from "./pages/notfound";
import Rooms from "./pages/rooms";
import "./styles/theme.css";
import "./App.css";
import AccessibilityWidget from "./components/accessibilitywidget";
import TermsAndConditions from "./pages/terms-and-conditions";
import Accessibility from "./pages/accessibility";
import CookieDrawer from "./components/CookieDrawer";
import PrivacyPolicy from "./pages/privacy-policy";
import MaintenancePage from "./pages/maintenance";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";

function App() {
  return (
    <Router>
      <div id="app-root">
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/homePage" replace />} />
          <Route path="/homePage" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/terms&conditions" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/maintenance" element={<MaintenancePage />} />
        </Routes>
        <Footer />
        <AccessibilityWidget />
        <CookieDrawer />
      </div>
    </Router>
  );
}

export default App;
