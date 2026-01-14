// ImageCarousel.tsx
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "../styles/embelaImageSlider.css";
import { useTranslation } from "react-i18next";

interface Props {
  images: string[];
}

const EmbelaImageSlider: React.FC<Props> = ({ images }) => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "he";

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: false,
    align: "center",
    direction: isRTL ? "rtl" : "ltr",
  });

  // State for pagination
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateIndex = useCallback(() => {
    if (!emblaApi) return;
    setCurrentIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Listen to scroll events
  useEffect(() => {
    if (!emblaApi) return;

    updateIndex(); // set initial index
    emblaApi.on("select", updateIndex);
  }, [emblaApi, updateIndex]);

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    if (isRTL) emblaApi.scrollNext();
    else emblaApi.scrollPrev();
  }, [emblaApi, isRTL]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    if (isRTL) emblaApi.scrollPrev();
    else emblaApi.scrollNext();
  }, [emblaApi, isRTL]);

  return (
    <div className="image-embla-wrapper">
      <div className="image-embla">
        <div className="image-embla__viewport" ref={emblaRef}>
          <div className="image-embla__container">
            {images.map((src, i) => (
              <div className="image-embla__slide" key={i}>
                <img src={src} alt={`slide-${i}`} />
              </div>
            ))}
          </div>
        </div>

        <button className="image-embla__button prev" onClick={scrollPrev}>
          {isRTL ? "›" : "‹"}
        </button>
        <button className="image-embla__button next" onClick={scrollNext}>
          {isRTL ? "‹" : "›"}
        </button>
      </div>

      {/* Pagination */}
      <div className="image-embla__pagination">
        {currentIndex + 1}/{images.length}
      </div>
    </div>
  );
};

export default EmbelaImageSlider;
