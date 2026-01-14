import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";
import { useTranslation } from "react-i18next";

interface ImageCard {
  imageUrl: string;
  alt?: string;
}

interface ImagesCarouselProps {
  images: ImageCard[];
  cardSize?: {
    width: number; // px
    height: number; // px
  };
}
const useIsMobile = () => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return isMobile;
};

const ImagesCarousel: React.FC<ImagesCarouselProps> = ({
  images,
  cardSize = { width: 300, height: 200 },
}) => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "he";
  const isMobile = useIsMobile();
  const effectiveImageSize = isMobile
    ? { width: 177.45, height: 236.39 }
    : cardSize;

  return (
    <div style={{ overflow: "hidden" }}>
      <Marquee
        gradient={false}
        speed={60}
        direction={isRTL ? "right" : "left"}
        pauseOnHover={false} // never stop on hover
        pauseOnClick={false} // never stop on click
        style={{ display: "flex" }}
      >
        {images.map((img, idx) => (
          <div
            key={idx}
            style={{
              width: effectiveImageSize.width,
              height: effectiveImageSize.height,
              marginRight: 20,
              overflow: "hidden",
              flex: "0 0 auto",
              transform: "translate3d(0,0,0)", // GPU acceleration
              willChange: "transform", // smooth animation hint
            }}
          >
            <img
              src={img.imageUrl}
              alt={img.alt || "image"}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default ImagesCarousel;
