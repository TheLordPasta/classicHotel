import "../styles/hotelwelcome.css";
import { useTranslation, Trans } from "react-i18next";
import { motion } from "framer-motion";

const HotelWelcome: React.FC = () => {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <section className="welcome-section">
        <h1 className="welcome-title">{t("hotelWelcome.welcomeTitle")}</h1>
        <p className="welcome-text">
          <Trans
            i18nKey="hotelWelcome.welcomeText"
            components={[<span className="tailored-word" />]}
          />
        </p>
      </section>
    </motion.div>
  );
};

export default HotelWelcome;
