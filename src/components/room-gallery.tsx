import React from "react";
import RoomCard from "./roomcard";
import ImageExample from "../resources/images/cabin.jpg";

const rooms = [
  {
    title: "Luxury Suite",
    imageUrl: ImageExample,
    basePrice: 1494, // ✅ Ensure all objects use basePrice
    description: "A luxury suite with ocean views.",
    key: 1,
  },
  {
    title: "Deluxe Room",
    imageUrl: ImageExample,
    basePrice: 1200, // ✅ Keep it consistent
    description: "A cozy deluxe room with modern amenities.",
    key: 2,
  },
];

const RoomGallery = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {rooms.map(
        (
          { key, ...room } // ✅ Extract `key` separately
        ) => (
          <RoomCard key={key} {...room} />
        )
      )}
    </div>
  );
};

export default RoomGallery;
