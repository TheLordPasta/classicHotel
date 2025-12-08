import "../styles/hotelwelcome.css";
import { useTranslation } from "react-i18next";
import HotelMap from "./HotelMap";

const HomeMap: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "he";
  return (
    <div className={`hotel-welcome-container ${isRTL ? "rtl" : ""}`}>
      <div className="text-container-welcome">
        <p className="sub-header-welcome">{t("homeMap.sub-header-map")}</p>
        <p className="sub-text-welcome">{t("homeMap.sub-text-map")}</p>
      </div>
      <div className="map-wrapper">
        <HotelMap />
      </div>
    </div>
  );
};

export default HomeMap;
