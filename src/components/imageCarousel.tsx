import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/imageCarousel.css";
import { useEffect, useState } from "react";

const images = [
  "/images/room1.jpeg",
  "/images/room1.jpeg",
  "/images/room1.jpeg",
  "/images/room1.jpeg",
  "/images/room1.jpeg",
  "/images/room1.jpeg",
];

// Helper to chunk images
const chunkImages = (arr: string[], size: number) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );

export default function ImageCarousel() {
  const [chunkSize, setChunkSize] = useState(3);

  useEffect(() => {
    const updateChunkSize = () => {
      setChunkSize(window.innerWidth < 768 ? 1 : 3);
    };
    updateChunkSize();
    window.addEventListener("resize", updateChunkSize);
    return () => window.removeEventListener("resize", updateChunkSize);
  }, []);

  const imageGroups = chunkImages(images, chunkSize);

  return (
    <div className="carousel-container">
      <Carousel controls indicators interval={4000}>
        {imageGroups.map((group, i) => (
          <Carousel.Item key={i}>
            <div className="carousel-row">
              {group.map((src, j) => (
                <img
                  key={j}
                  src={src}
                  alt={`Room ${i * chunkSize + j + 1}`}
                  className="carousel-image"
                />
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
