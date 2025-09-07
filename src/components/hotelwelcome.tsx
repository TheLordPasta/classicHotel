import "../styles/hotelwelcome.css";
import { motion } from "framer-motion";

const HotelWelcome = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <section className="welcome-section">
        <h1 className="welcome-title">THE TAILOR ART HOTEL IN TEL AVIV</h1>
        <p className="welcome-text">
          Experience the charm and elegance of a{" "}
          <span className="tailored-word">Tailored</span> visit. Indulge in
          luxury, comfort, and breathtaking views. Enjoy our exclusive offers
          and make unforgettable memories. Unwind in style — from plush suites
          to serene rooftop lounges, every space invites relaxation. Savor
          gourmet cuisine curated by world-class chefs, paired with fine wines
          and unforgettable ambiance. Rejuvenate your senses at our exclusive
          spa, where tranquility meets indulgence. Celebrate life’s moments with
          bespoke events, curated experiences, and personalized service that
          feels like home. Whether you're here for a romantic escape, a business
          retreat, or a weekend of discovery, The Tailor Hotel promises more
          than a stay — it offers a story worth telling.
        </p>
      </section>
    </motion.div>
  );
};

export default HotelWelcome;
