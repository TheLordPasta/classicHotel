import React, { useEffect, useState } from "react";
import RoomCard from "./roomcard";
import "../styles/roomgallery.css";

interface Room {
  _id: string;
  title: string;
  imageUrl: string;
  basePrice: number;
  description: string;
  seeMoreRoute: string;
}

const RoomGallery: React.FC = () => {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const apiUrl = "https://classichotel.onrender.com";
        const response = await fetch(`${apiUrl}/api/rooms`);
        if (!response.ok) {
          throw new Error(`Failed to fetch rooms: ${response.status}`);
        }
        const data = await response.json();
        setRooms(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  if (loading) return <p>Loading rooms...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="room-gallery">
      {/* {rooms.map((room) => (
        <RoomCard key={room._id} {...room} />
      ))} */}
    </div>
  );
};

export default RoomGallery;
