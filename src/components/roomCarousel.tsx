import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import RoomCard from "./roomcard";
import { useTranslation } from "react-i18next";

interface Room {
  title: string;
  subTitle: string;
  imageUrl: string;
  description: string;
  sideInfoMeter: string;
}

interface RoomsCarouselProps {
  rooms: Room[];
}

const RoomsCarousel: React.FC<RoomsCarouselProps> = ({ rooms }) => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "he";

  return (
    <Swiper
      modules={[FreeMode]}
      freeMode={true} // drag freely
      slidesPerView={"auto"} // cards size themselves
      spaceBetween={"20px"} // gap between cards
      centeredSlides={false} // 👈 Swiper’s “center mode”
      dir={isRTL ? "rtl" : "ltr"} // 👈 RTL/LTR aware
    >
      {rooms.map((room, idx) => (
        <SwiperSlide key={idx} style={{ width: "400px" }}>
          <RoomCard {...room} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default RoomsCarousel;
