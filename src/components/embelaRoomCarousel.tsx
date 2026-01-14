import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useTranslation } from "react-i18next";
import RoomCard from "./roomcard";
import "../styles/embelaRoomCarousel.css";

interface Room {
  title: string;
  subTitle: string;
  imageUrl: string;
  description: string;
  sideInfoMeter: string;
  roomImages: string[];
}

interface Props {
  rooms: Room[];
  cardWidth?: number;
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

const EmbelaRoomCarousel: React.FC<Props> = ({ rooms, cardWidth = 400 }) => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "he";
  const isMobile = useIsMobile();
  const effectiveCardWidth = isMobile ? 289 : cardWidth;
  const alignment: "end" | "start" = isRTL ? "start" : "end";

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    dragFree: false,
    slidesToScroll: 1,
    align: alignment,
    containScroll: "trimSnaps",
    direction: isRTL ? "rtl" : "ltr", // flow carousel RTL
  });

  // Re-init on slide changes
  useEffect(() => {
    emblaApi?.reInit();
  }, [emblaApi, rooms]);

  // FIX: swap scroll directions in RTL
  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    if (isRTL) emblaApi.scrollNext(); // prev visually → scrollNext internally
    else emblaApi.scrollPrev();
  }, [emblaApi, isRTL]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    if (isRTL) emblaApi.scrollPrev(); // next visually → scrollPrev internally
    else emblaApi.scrollNext();
  }, [emblaApi, isRTL]);

  return (
    <div className={`embla ${isRTL ? "rtl" : ""}`}>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {rooms.map((room, i) => (
            <div
              className="embla__slide"
              key={i}
              style={{
                flex: `0 0 ${effectiveCardWidth}px`,
                minWidth: `${effectiveCardWidth}px`,
              }}
            >
              <RoomCard {...room} />
            </div>
          ))}
        </div>
      </div>

      {/* Carousel arrows */}
      <button
        className="embla__button embla__button--prev"
        onClick={scrollPrev}
        aria-label="Previous"
      >
        {isRTL ? "›" : "‹"} {/* prev arrow */}
      </button>
      <button
        className="embla__button embla__button--next"
        onClick={scrollNext}
        aria-label="Next"
      >
        {isRTL ? "‹" : "›"} {/* next arrow */}
      </button>
    </div>
  );
};

export default EmbelaRoomCarousel;
