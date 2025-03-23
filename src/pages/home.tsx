import RoomGallery from "../components/room-gallery";
import FullWidthVideo from "../components/fullwidthvideo";
import HotelWelcome from "../components/hotelwelcome";
import "../styles/theme.css";

function home() {
  return (
    <div>
      <FullWidthVideo />
      <HotelWelcome />
      <RoomGallery />
    </div>
  );
}

export default home;
