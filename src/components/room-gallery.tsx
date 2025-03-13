import React from "react";
import RoomCard from "./roomcard";
import ImageExample from "../resources/images/cabin.jpg";
import "../styles/roomgallery.css";

const rooms = [
  {
    title: "Luxury Suite",
    imageUrl: ImageExample,
    basePrice: 1494,
    description: "A luxury suite with ocean views.",
    key: 1,
  },
  {
    title: "Deluxe Room",
    imageUrl: ImageExample,
    basePrice: 1200,
    description: "A cozy deluxe room with modern amenities.",
    key: 2,
  },
  {
    title: "Executive Room",
    imageUrl: ImageExample,
    basePrice: 1350,
    description: "Spacious room with premium services.",
    key: 3,
  },
  {
    title: "Presidential Suite",
    imageUrl: ImageExample,
    basePrice: 2000,
    description: "Experience the highest level of comfort.",
    key: 4,
  },
  {
    title: "Family Room",
    imageUrl: ImageExample,
    basePrice: 1100,
    description: "Perfect for a family stay.",
    key: 5,
  },
  {
    title: "Budget Room",
    imageUrl: ImageExample,
    basePrice: 800,
    description: "Affordable and comfortable.",
    key: 6,
  },
];

const RoomGallery = () => {
  return (
    <div className="room-gallery">
      {rooms.map(({ key, ...room }) => (
        <RoomCard key={key} {...room} />
      ))}
    </div>
  );
};

export default RoomGallery;
