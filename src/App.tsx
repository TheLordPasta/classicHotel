import Navbar from "./components/navbar";
import RoomGallery from "./components/room-gallery";
import Header from "./components/header";
import FullWidthVideo from "./components/fullwidthvideo";
import "./App.css";

function App() {
  return (
    <div style={{ backgroundColor: "#f5f5f5", paddingBottom: "5000px" }}>
      <Header />
      <Navbar />
      <FullWidthVideo />
      <RoomGallery />
      <p>terms and conditions</p>
      <p>footer</p>
    </div>
  );
}

export default App;
