import "../styles/HomeRooms.css";
import { useTranslation, Trans } from "react-i18next";
import RoomImg from "../resources/images/example1.png";
import RoomsCarousel from "./roomCarousel";
import ArrowLeftImg from "../resources/images/ArrowLeft.svg";
import Bed from "../resources/images/bed.svg";
import Desk from "../resources/images/desk.svg";
import TV from "../resources/images/TV.svg";
import Nespresso from "../resources/images/nespresso.svg";
import SafeBox from "../resources/images/safebox.svg";
import Minibar from "../resources/images/minibar.svg";
import HotelMap from "./HotelMap";

const HomeRooms: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "he";
  //markers

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
        <p className="rooms-side-note">
          <Trans
            i18nKey="homeRooms.roomsSideNote"
            components={{
              1: <span className="rooms-highlight" />,
              3: <span className="rooms-highlight" />,
            }}
          />
        </p>
      </div>
      <div className="arrow-wrapper">
        <img src={ArrowLeftImg} className="arrow-swipper-icon" />
      </div>
      {/* Carousel of 4 duplicated rooms */}
      <RoomsCarousel rooms={rooms} />
      <div className="header-include-container">
        <p className={`rooms-text ${isRTL ? "rtl" : ""}`}>
          {t("homeRooms.roomsIncludeText")}
        </p>
        {/*icons with subtexts*/}
      </div>
      <div className={`icons-grid ${isRTL ? "rtl" : ""}`}>
        <div className="icon-with-subtext">
          <img src={Bed}></img>
          <p className="icon-side-note">{t("homeRooms.roomsIncludeTextBed")}</p>
        </div>
        <div className="icon-with-subtext">
          <img src={Desk}></img>
          <p className="icon-side-note">
            {t("homeRooms.roomsIncludeTextDesk")}
          </p>
        </div>
        <div className="icon-with-subtext">
          <img src={TV}></img>
          <p className="icon-side-note">{t("homeRooms.roomsIncludeTextTV")}</p>
        </div>
        <div className="icon-with-subtext">
          <img src={Nespresso}></img>
          <p className="icon-side-note">
            {t("homeRooms.roomsIncludeTextCoffee")}
          </p>
        </div>
        <div className="icon-with-subtext">
          <img src={SafeBox}></img>
          <p className="icon-side-note">
            {t("homeRooms.roomsIncludeTextSafeBox")}
          </p>
        </div>
        <div className="icon-with-subtext">
          <img src={Minibar}></img>
          <p className="icon-side-note">
            {t("homeRooms.roomsIncludeTextMinibar")}
          </p>
        </div>
        <div className="icon-with-subtext">
          <img src={Bed}></img>
          <p className="icon-side-note">
            {t("homeRooms.roomsIncludeTextItem1")}
          </p>
        </div>
        <div className="icon-with-subtext">
          <img src={Bed}></img>
          <p className="icon-side-note">
            {t("homeRooms.roomsIncludeTextItem2")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeRooms;
