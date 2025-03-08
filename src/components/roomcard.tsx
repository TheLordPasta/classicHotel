import React from "react";
import cabin from "../resources/images/cabin.jpg";
import "../styles/roomcard.css";

interface RoomCardProps {
  title: string;
  imageUrl: any;
  price: number;
  description: string;
}

const RoomCard: React.FC<RoomCardProps> = ({
  title,
  imageUrl,
  price,
  description,
}) => {
  return (
    <div className="card-container">
      <img src={cabin} alt={title} className="card-image" />
      <div className="card-text">
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
        <p className="price-tag">${price} / night</p>
      </div>
      <div className="buttons-container">
        <button className="book-now-button">Book Now</button>
        <button className="see-more-button">See More</button>
      </div>
    </div>
  );
};

export default RoomCard;
