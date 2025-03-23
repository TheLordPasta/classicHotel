import Navbar from "./components/navbar";
import Header from "./components/header";
import Home from "./pages/home";
import Footer from "./components/footer";
import "./styles/theme.css";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      {/*from here we need router*/}
      <Home />
      <Footer />
    </div>
  );
}

export default App;
