import "../styles/hotelwelcome.css";
import { useTranslation } from "react-i18next";
import CoverImage from "../resources/images/coverImageWelcome.png";

const HotelWelcome: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "he";
  return (
    <div className={`hotel-welcome-container ${isRTL ? "rtl" : ""}`}>
      <img src={CoverImage}></img>
      <div className="text-container-welcome">
        <p className="sub-header-welcome">
          {t("hotelWelcome.sub-header-welcome")}
        </p>
        <h1 className="header-welcome">Where Every Stay is Handcrafted</h1>
        <p className="sub-text-welcome">{t("hotelWelcome.sub-text-welcome")}</p>
      </div>
    </div>
  );
};

export default HotelWelcome;
