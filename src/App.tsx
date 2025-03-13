import Navbar from "./components/navbar";
import RoomGallery from "./components/room-gallery";
import Header from "./components/header";
import FullWidthVideo from "./components/fullwidthvideo";
import HotelWelcome from "./components/hotelwelcome";
import "./styles/theme.css";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <FullWidthVideo />
      <HotelWelcome />
      <RoomGallery />
      <p>terms and conditions</p>
      <p>footer</p>
    </div>
  );
}

export default App;
