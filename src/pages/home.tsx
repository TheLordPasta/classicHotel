import React from "react";
import { motion } from "framer-motion";
import FullWidthVideo from "../components/fullwidthvideo";
import HotelWelcome from "../components/hotelwelcome";
import SEO from "../components/seo";
import "../styles/theme.css";
import HomeRooms from "../components/homeRooms";
import HomeMap from "../components/HomeMap";
import "../styles/home.css";
import HomeServices from "../components/homeServices";
import ImagesCarousel from "../components/imageCarousel";
import env1 from "../resources/images/envImages/env1.png";
import env2 from "../resources/images/envImages/env2.png";
import env3 from "../resources/images/envImages/env3.png";
import env4 from "../resources/images/envImages/env4.png";
import env5 from "../resources/images/envImages/env5.png";

const EnvImages = [
  { imageUrl: env1, alt: "env1" },
  { imageUrl: env2, alt: "env2" },
  { imageUrl: env3, alt: "env3" },
  { imageUrl: env4, alt: "env4" },
  { imageUrl: env5, alt: "env5" },
  { imageUrl: env1, alt: "env1" },
  { imageUrl: env2, alt: "env2" },
  { imageUrl: env3, alt: "env3" },
  { imageUrl: env4, alt: "env4" },
  { imageUrl: env5, alt: "env5" },
  { imageUrl: env1, alt: "env1" },
  { imageUrl: env2, alt: "env2" },
  { imageUrl: env3, alt: "env3" },
  { imageUrl: env4, alt: "env4" },
  { imageUrl: env5, alt: "env5" },
  { imageUrl: env1, alt: "env1" },
  { imageUrl: env2, alt: "env2" },
  { imageUrl: env3, alt: "env3" },
  { imageUrl: env4, alt: "env4" },
  { imageUrl: env5, alt: "env5" },
  { imageUrl: env1, alt: "env1" },
  { imageUrl: env2, alt: "env2" },
  { imageUrl: env3, alt: "env3" },
  { imageUrl: env4, alt: "env4" },
  { imageUrl: env5, alt: "env5" },
];

const fadeInUpOnScroll = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function Home() {
  return (
    <div>
      <SEO
        title="Inspired by Tel Aviv’s storied streets, Tailor Hotel offers a refined, design-driven stay rooted in individuality, creativity, and urban elegance."
        description="Tailor Hotel blends timeless design, artisan spirit, and Tel Aviv’s vibrant energy into a refined, custom-crafted hospitality experience."
        keywords="tel aviv hotel, boutique hotel, tailor hotel..."
        canonical="https://thetailortlv.com/"
        image="https://thetailortlv.com/images/og-image.jpg"
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // animate when 30% of component is in view, only once
        variants={fadeInUpOnScroll}
      >
        <FullWidthVideo />
      </motion.div>
      <div className="component-wrapper">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUpOnScroll}
        >
          <HotelWelcome />
        </motion.div>
      </div>
      <div className="blue-wrapper">
        <div className="component-wrapper">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUpOnScroll}
          >
            <HomeRooms />
          </motion.div>
        </div>
      </div>
      <div className="component-wrapper">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUpOnScroll}
        >
          <HomeMap />
        </motion.div>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUpOnScroll}
      >
        <div className="image-carousel-env">
          <ImagesCarousel
            images={EnvImages}
            cardSize={{ width: 294, height: 391 }}
          />
        </div>
      </motion.div>

      <div className="blue-wrapper">
        <div className="component-wrapper">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUpOnScroll}
          >
            <HomeServices />
          </motion.div>
        </div>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUpOnScroll}
      >
        <div className="image-carousel-env">
          <ImagesCarousel
            images={EnvImages}
            cardSize={{ width: 362.49, height: 390 }}
          />
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
