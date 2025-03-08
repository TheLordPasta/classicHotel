import React from "react";
import RoomCard from "./roomcard";
import cabin from "../resources/images/cabin.jpg";

const rooms = [
  {
    title: "Luxury Suite",
    imageUrl: { cabin },
    price: 150,
    description: "A luxurious suite with ocean view.",
  },
  {
    title: "Cozy Cabin",
    imageUrl: "https://source.unsplash.com/300x200/?cabin",
    price: 90,
    description: "A warm and cozy wooden cabin.",
  },
  {
    title: "Modern Apartment",
    imageUrl: "https://source.unsplash.com/300x200/?apartment",
    price: 120,
    description: "A stylish modern apartment in the city.",
  },
];

const RoomGallery: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {rooms.map((room, index) => (
        <RoomCard key={index} {...room} />
      ))}
    </div>
  );
};

export default RoomGallery;
