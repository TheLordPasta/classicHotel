import "../styles/hotelwelcome.css";

const HotelWelcome = () => {
  return (
    <section className="welcome-section">
      <h1 className="welcome-title">WELCOME TO [YOUR HOTEL NAME]</h1>
      <p className="welcome-text">
        Experience the charm and elegance of [Your Hotel Name]. Indulge in
        luxury, comfort, and breathtaking views. Enjoy our exclusive offers and
        make unforgettable memories.
      </p>
      <p className="welcome-highlight">
        Members save up to <strong>10% more</strong> and enjoy incredible
        rewards.
      </p>
      <button className="welcome-button">Become a Member</button>
    </section>
  );
};

export default HotelWelcome;
