import "../styles/roomcontainer.css";
import { useState } from "react";

// Define the type for the props
interface RoomContainerLeftProps {
  images: string[]; // Array of image URLs
  title: string; // Title of the room
  description: string; // Description of the room
}

const RoomContainerLeft: React.FC<RoomContainerLeftProps> = ({
  images,
  title,
  description,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="card-container-roompage">
      <div className="text-container">
        <h1>{title}</h1>
        <p>{description}</p>
        <button className="book-now-btn">Book Now</button>
      </div>
      <div className="carousell-container">
        <button className="carousel-btn left" onClick={prevImage}>
          &lt;
        </button>
        <div
          className="carousel-images"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`, // Shift the container based on index
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="image-container">
              <img
                src={image}
                alt={`Room ${index + 1}`}
                className="card-image"
              />
            </div>
          ))}
        </div>
        <button className="carousel-btn right" onClick={nextImage}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default RoomContainerLeft;
