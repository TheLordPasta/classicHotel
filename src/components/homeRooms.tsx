import "../styles/HomeRooms.css";
import { useTranslation, Trans } from "react-i18next";
import RoomImg from "../resources/images/example1.png";
import RoomsCarousel from "./roomCarousel";
import ArrowLeftImg from "../resources/images/ArrowLeft.svg";

const HomeRooms: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "he";

  // Four duplicated rooms
  const rooms = [
    {
      title: "ECONOMY",
      subTitle: t("roomCardEconomy.subTitle"),
      imageUrl: RoomImg,
      description: t("roomCardEconomy.description"),
      sideInfoMeter: t("roomCardEconomy.subInfoMeter"),
    },
    {
      title: "ECONOMY",
      subTitle: t("roomCardEconomy.subTitle"),
      imageUrl: RoomImg,
      description: t("roomCardEconomy.description"),
      sideInfoMeter: t("roomCardEconomy.subInfoMeter"),
    },
    {
      title: "ECONOMY",
      subTitle: t("roomCardEconomy.subTitle"),
      imageUrl: RoomImg,
      description: t("roomCardEconomy.description"),
      sideInfoMeter: t("roomCardEconomy.subInfoMeter"),
    },
    {
      title: "ECONOMY",
      subTitle: t("roomCardEconomy.subTitle"),
      imageUrl: RoomImg,
      description: t("roomCardEconomy.description"),
      sideInfoMeter: t("roomCardEconomy.subInfoMeter"),
    },
    {
      title: "ECONOMY",
      subTitle: t("roomCardEconomy.subTitle"),
      imageUrl: RoomImg,
      description: t("roomCardEconomy.description"),
      sideInfoMeter: t("roomCardEconomy.subInfoMeter"),
    },
    {
      title: "ECONOMY",
      subTitle: t("roomCardEconomy.subTitle"),
      imageUrl: RoomImg,
      description: t("roomCardEconomy.description"),
      sideInfoMeter: t("roomCardEconomy.subInfoMeter"),
    },
    {
      title: "ECONOMY",
      subTitle: t("roomCardEconomy.subTitle"),
      imageUrl: RoomImg,
      description: t("roomCardEconomy.description"),
      sideInfoMeter: t("roomCardEconomy.subInfoMeter"),
    },
    {
      title: "ECONOMY",
      subTitle: t("roomCardEconomy.subTitle"),
      imageUrl: RoomImg,
      description: t("roomCardEconomy.description"),
      sideInfoMeter: t("roomCardEconomy.subInfoMeter"),
    },
  ];

  return (
    <div className={`rooms-container ${isRTL ? "rtl" : ""}`}>
      <div className="header-container">
        <p className="sub-header-rooms">{t("homeRooms.roomsTitle")}</p>
        <p className={`rooms-text ${isRTL ? "rtl" : ""}`}>
          {t("homeRooms.roomsText")}
        </p>
        <div className="side-note-row">
          <p className="rooms-side-note">
            <Trans
              i18nKey="homeRooms.roomsSideNote"
              components={{
                1: <span className="rooms-highlight" />,
                3: <span className="rooms-highlight" />,
              }}
            />
          </p>
          <img src={ArrowLeftImg} className="arrow-swipper-icon" />
        </div>
      </div>

      {/* Carousel of 4 duplicated rooms */}
      <RoomsCarousel rooms={rooms} />
    </div>
  );
};

export default HomeRooms;
