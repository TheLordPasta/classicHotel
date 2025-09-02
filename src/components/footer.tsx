import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/footer.css";
import {
  faLinkedin,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  return (
    <footer className="footer-container">
      <h1 className="hotel-name">The Tailor Hotel</h1>
      <div className="footer-content">
        <div className="footer-section left">
          <p>Contact Us</p>
          <p className="contact-info">📞 +123-456-7890</p>

          <p className="contact-info">✉️ info@yourhotel.com</p>
          <div className="social-icons">
            <p>Follow Us</p>
            <span className="social-icon">
              <FontAwesomeIcon
                icon={faInstagram}
                color="#d325caff"
              ></FontAwesomeIcon>
            </span>
            <span className="social-icon">
              <FontAwesomeIcon
                icon={faLinkedin}
                color="#1877F2"
              ></FontAwesomeIcon>
            </span>
            <span className="social-icon">
              <FontAwesomeIcon
                icon={faFacebook}
                color="#2f25f1ff"
              ></FontAwesomeIcon>
            </span>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-section middle">
          <a href="/attractions">Attractions</a>
          <a href="/Media">Media</a>
          <a href="/Sitemap">Sitemap</a>
          <a href="/terms&conditions">Terms and Conditions</a>
        </div>

        <div className="footer-divider" />

        <div className="footer-section right">
          <p>📶 Free WiFi at the hotel</p>
          <a href="/accessibility">Accessibility</a>
          <a href="/My-Reservations">My Reservations</a>
          <a href="/Privacy-Policy">Privacy Policy</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>🔒 Secured Website</p>
      </div>
    </footer>
  );
}
