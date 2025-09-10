import "../styles/HomeShortAbout.css";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const HomeShortAbout: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "he";
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="short-about-container"
    >
      <section className="short-about-section">
        <h1 className="short-about-title">
          {t("homeShortAbout.shortAboutTitle")}
        </h1>
        <p className={`short-about-text ${isRTL ? "rtl" : ""}`}>
          {t("homeShortAbout.shortAboutText")}
        </p>
      </section>
    </motion.div>
  );
};

export default HomeShortAbout;
