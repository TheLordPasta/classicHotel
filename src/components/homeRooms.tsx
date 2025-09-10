import "../styles/HomeRooms.css";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const HomeRooms: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "he";
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="primary-container"
    >
      <section className="rooms-section">
        <h1 className="rooms-title">{t("homeRooms.roomsTitle")}</h1>
        <p className={`rooms-text ${isRTL ? "rtl" : ""}`}>
          {t("homeRooms.roomsText")}
        </p>
        <p className={`rooms-text ${isRTL ? "rtl" : ""}`}>
          {t("homeRooms.roomsText2")}
        </p>
        <a className="rooms-link-text" href="/rooms">
          {t("homeRooms.roomsLinkText")}
        </a>
      </section>
    </motion.div>
  );
};

export default HomeRooms;
