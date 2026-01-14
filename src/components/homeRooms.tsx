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
import Cosmetic from "../resources/images/cosmetic.svg";
import Bathrobe from "../resources/images/bathrobe.svg";
import Bag from "../resources/images/bag.svg";
import EmbelaRoomCarousel from "./embelaRoomCarousel";
import env1 from "../resources/images/envImages/env1.png";
import env2 from "../resources/images/envImages/env2.png";
import env3 from "../resources/images/envImages/env3.png";

const HomeRooms: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "he";
  const Images = [env1, env2, env3];
  //markers

  // Four duplicated rooms
  const rooms = [
    {
      title: "ECONOMY",
      subTitle: t("roomCardEconomy.subTitle"),
      imageUrl: RoomImg,
      description: t("roomCardEconomy.description"),
      sideInfoMeter: t("roomCardEconomy.subInfoMeter"),
      roomImages: Images,
    },
    {
      title: "STANDARD",
      subTitle: t("roomCardStandard.subTitle"),
      imageUrl: RoomImg,
      description: t("roomCardStandard.description"),
      sideInfoMeter: t("roomCardStandard.subInfoMeter"),
      roomImages: Images,
    },
    {
      title: "SUPERIOR",
      subTitle: t("roomCardSuperior.subTitle"),
      imageUrl: RoomImg,
      description: t("roomCardSuperior.description"),
      sideInfoMeter: t("roomCardSuperior.subInfoMeter"),
      roomImages: Images,
    },
    {
      title: "SUPERIOR BALCONY",
      subTitle: t("roomCardSuperiorBalcony.subTitle"),
      imageUrl: RoomImg,
      description: t("roomCardSuperiorBalcony.description"),
      sideInfoMeter: t("roomCardSuperiorBalcony.subInfoMeter"),
      roomImages: Images,
    },
    {
      title: "DELUXE",
      subTitle: t("roomCardDeluxe.subTitle"),
      imageUrl: RoomImg,
      description: t("roomCardDeluxe.description"),
      sideInfoMeter: t("roomCardDeluxe.subInfoMeter"),
      roomImages: Images,
    },
    {
      title: "DELUXE BALCONY",
      subTitle: t("roomCardDeluxeBalcony.subTitle"),
      imageUrl: RoomImg,
      description: t("roomCardDeluxeBalcony.description"),
      sideInfoMeter: t("roomCardDeluxeBalcony.subInfoMeter"),
      roomImages: Images,
    },
    {
      title: "SUITE",
      subTitle: t("roomCardSuite.subTitle"),
      imageUrl: RoomImg,
      description: t("roomCardSuite.description"),
      sideInfoMeter: t("roomCardSuite.subInfoMeter"),
      roomImages: Images,
    },
  ];

  return (
    <div className="rooms">
      <div className="rooms-wrapper">
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
              <div>{t("homeRooms.roomsSideNoteCancellationPolicy")}</div>
            </p>
          </div>
        </div>
      </div>
      <div className={`carousel-container ${isRTL ? "rtl" : ""}`}>
        <EmbelaRoomCarousel rooms={rooms} />
      </div>
      <div className="rooms-wrapper">
        <div className={`rooms-container ${isRTL ? "rtl" : ""}`}>
          <div className="header-include-container">
            <p className={`rooms-text-include ${isRTL ? "rtl" : ""}`}>
              {t("homeRooms.roomsIncludeText")}
            </p>
            {/*icons with subtexts*/}
          </div>
          <div className={`icons-grid ${isRTL ? "rtl" : ""}`}>
            <div className="icon-with-subtext">
              <img src={Bed}></img>
              <p className="icon-side-note">
                {t("homeRooms.roomsIncludeTextBed")}
              </p>
            </div>
            <div className="icon-with-subtext">
              <img src={Desk}></img>
              <p className="icon-side-note">
                {t("homeRooms.roomsIncludeTextDesk")}
              </p>
            </div>
            <div className="icon-with-subtext">
              <img src={TV}></img>
              <p className="icon-side-note">
                {t("homeRooms.roomsIncludeTextTV")}
              </p>
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
              <img src={Cosmetic}></img>
              <p className="icon-side-note">
                {t("homeRooms.roomsIncludeCosmetic")}
              </p>
            </div>
            <div className="icon-with-subtext">
              <img src={Bathrobe}></img>
              <p className="icon-side-note">
                {t("homeRooms.roomsIncludeBathrobe")}
              </p>
            </div>
            <div className="icon-with-subtext">
              <img src={Bag}></img>
              <p className="icon-side-note">
                {t("homeRooms.roomsIncludeFabricBag")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeRooms;
