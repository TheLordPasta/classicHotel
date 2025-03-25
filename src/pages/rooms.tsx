import "../styles/rooms.css";
import RoomContainerLeft from "../components/roomcontainerleft";
import RoomContainerRight from "../components/roomcontainerright";
import ImageExample1 from "../resources/images/cabin.jpg";
import ImageExample2 from "../resources/images/tiger.jpg";

const images = [ImageExample1, ImageExample2];
function Rooms() {
  return (
    <div>
      <div className="text-container-roomspage">
        <h1>Rooms</h1>
        <p>
          Nahalat Benjamin is a charming neighborhood in the heart of Tel Aviv,
          known for its vibrant atmosphere and historical significance. Located
          just a short walk from the famous Carmel Market, it features
          picturesque streets lined with Bauhaus-style buildings and lively
          cultural spots. The area is filled with cafes, boutiques, art
          galleries, and street vendors, making it a popular destination for
          locals and tourists alike. It's a great place to experience the mix of
          Tel Aviv’s old-world charm and modern creativity.
        </p>
      </div>
      <RoomContainerLeft
        images={images}
        title="ultra deluxe room"
        description="balbladgvladbladbgldgbaldbla"
      />
      <RoomContainerRight
        images={images}
        title="ultra deluxe room"
        description="balbladgvladbladbgldgbaldbla"
      />
    </div>
  );
}

export default Rooms;
