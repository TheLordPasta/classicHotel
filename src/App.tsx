import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Home from "./pages/home";
import Footer from "./components/footer";
import NotFound from "./pages/notfound";
import Rooms from "./pages/rooms";
import "./styles/theme.css";
import "./App.css";
import AccessibilityWidget from "./components/accessibilitywidget";

function App() {
  return (
    <Router>
      <div id="app-root">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/homePage" replace />} />
          <Route path="/homePage" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
        </Routes>
        <Footer />
      </div>
      <AccessibilityWidget />
    </Router>
  );
}

export default App;
