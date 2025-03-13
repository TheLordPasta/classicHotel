import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/roomcard.css";

interface RoomCardProps {
  title: string;
  imageUrl: string;
  basePrice: number; // Base price in default currency (USD)
  description: string;
}

const RoomCard: React.FC<RoomCardProps> = ({
  title,
  imageUrl,
  basePrice,
  description,
}) => {
  const [currency, setCurrency] = useState("USD");
  const [exchangeRate, setExchangeRate] = useState(1);
  const [price, setPrice] = useState(basePrice);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await axios.get(
          `https://api.exchangerate-api.com/v4/latest/USD`
        );
        if (response.data.rates[currency]) {
          const rate = response.data.rates[currency];
          setExchangeRate(rate);
          setPrice(basePrice * rate);
        }
      } catch (error) {
        console.error("Error fetching exchange rate", error);
      }
    };

    fetchExchangeRate();
  }, [currency, basePrice]);

  return (
    <div className="card-container">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-text">
        <h2 className="title">{title}</h2>
        <div className="title-spacer">____________</div>
        <p className="description">{description}</p>
        <div className="price-container">
          <span className="price-label">From</span>
          <div className="currency-selector-container">
            <select
              className="currency-selector"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <option value="USD">USD</option>
              <option value="ILS">ILS</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
            </select>
            <span>{"\u25BE"}</span>
          </div>
          <span className="price-value">{price.toFixed(2)}</span>
        </div>
      </div>
      <div className="buttons-container">
        <button className="book-now-button">Book Now</button>
        <button className="see-more-button">See More</button>
      </div>
    </div>
  );
};

export default RoomCard;
