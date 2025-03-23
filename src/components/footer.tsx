import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/footer.css";
import { faWhatsapp, faFacebook } from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  return (
    <footer className="footer-container">
      <h1 className="hotel-name">Your Hotel Name</h1>
      <div className="footer-content">
        <div className="footer-section left">
          <p>Contact Us</p>
          <p className="contact-info">📞 +123-456-7890</p>

          <p className="contact-info">✉️ info@yourhotel.com</p>
          <div className="social-icons">
            <p>Follow Us</p>
            <span className="social-icon">
              <FontAwesomeIcon
                icon={faWhatsapp}
                color="#25d366"
              ></FontAwesomeIcon>
            </span>
            <span className="social-icon">
              <FontAwesomeIcon
                icon={faFacebook}
                color="#1877F2"
              ></FontAwesomeIcon>
            </span>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-section middle">
          <a href="#">Attractions</a>
          <a href="#">Media</a>
          <a href="#">Sitemap</a>
          <a href="#">Terms and Conditions</a>
        </div>

        <div className="footer-divider" />

        <div className="footer-section right">
          <p>📶 Free WiFi at the hotel</p>
          <a href="#">Accessibility</a>
          <a href="#">My Reservations</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>🔒 Secured Website</p>
        <p>-sponser company- | -sponser slogen-</p>
      </div>
    </footer>
  );
}
