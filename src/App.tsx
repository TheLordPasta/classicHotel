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

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/homePage" replace />} />
        <Route path="/homePage" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
