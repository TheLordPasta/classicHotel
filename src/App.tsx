import Navbar from "./components/navbar";
import RoomGallery from "./components/room-gallery";
import Header from "./components/header";
import "./App.css";

function App() {
  return (
    <div style={{ backgroundColor: "black", paddingBottom: "5000px" }}>
      <Header />
      <Navbar />
      <p>video container</p>
      <RoomGallery />
      <p>terms and conditions</p>
      <p>footer</p>
    </div>
  );
}

export default App;
