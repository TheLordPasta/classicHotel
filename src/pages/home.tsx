import React from "react";
//import RoomGallery from "../components/room-gallery";
import FullWidthVideo from "../components/fullwidthvideo";
import HotelWelcome from "../components/hotelwelcome";
import SEO from "../components/seo"; // 👈 Import your SEO component
import "../styles/theme.css";
import HomeRooms from "../components/homeRooms";
import ImageCarousel from "../components/imageCarousel";

function Home() {
  return (
    <div>
      <SEO
        title="Inspired by Tel Aviv’s storied streets, Tailor Hotel offers a refined, design-driven stay rooted in individuality, creativity, and urban elegance."
        description="Tailor Hotel blends timeless design, artisan spirit, and Tel Aviv’s vibrant energy into a refined, custom-crafted hospitality experience."
        keywords="tel aviv hotel, boutique hotel, tailor hotel, urban hospitality, design hotel, tel aviv hotel, boutique hotel tel aviv, design hotel israel,
         urban hotel tel aviv, tailor hotel tel aviv, best hotels in tel aviv, tel aviv accommodation, stylish hotel tel aviv, tel aviv boutique stay, hotel near carmel market, hotel in florentin tel aviv,
         hotel near neve tzedek,artisan hospitality, crafted hotel experience, modern boutique hotel, timeless design hotel, curated hotel stay, aesthetic hotel tel aviv, elegant urban retreat, personalized hotel service,
         creative hotel concept, hotel with rooftop bar, hotel with chef restaurant, immersive hotel design, hotel for conscious travelers, independent traveler hotel, hotel for creatives, hotel for digital nomads, hotel for business travelers,
         hotel for weekend escape, hotel for international visitors, hotel for stylish stays, hotel for culture lovers, hotel for young travelers"
        canonical="https://thetailortlv.com/"
        image="https://thetailortlv.com/images/og-image.jpg" //we will use other images
      />
      <FullWidthVideo />
      <HotelWelcome />
      <HomeRooms />
      <ImageCarousel />
    </div>
  );
}

export default Home;
