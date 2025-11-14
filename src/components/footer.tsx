import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/footer.css";
import { useTranslation } from "react-i18next";
import {
  faLinkedin,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { useLayoutContext } from "../contexts/LayoutContext";
import Banner from "../resources/images/patternBanner2x.png";

export default function Footer() {
  const { i18n, t } = useTranslation();
  const direction = i18n.language === "he" ? "rtl" : "ltr";
  const layout = useLayoutContext();

  return (
    <footer className="footer-container" dir={direction}>
      <div className="logo-with-text-grid">
        <img className="logo-footer" src={layout.bigLogo}></img>
        <div className="footer-text">
          <div className={`footer-contact ${layout.isRTL ? "rtl" : ""}`}>
            <div className="footer-item">
              <img src={layout.mappinIconRev} alt="map" />

              <span> {t("navbar.addressText")}</span>
            </div>
            <div className="footer-divider"></div>
            <div className="footer-item">
              <img src={layout.mailIconRev} alt="mail" />
              <a href="mailto:hello@tailorhotel.com"> hello@thetailortlv.com</a>
            </div>
            <div className="footer-divider"></div>
            <div className="footer-item">
              <img src={layout.phoneIconRev} alt="phone" />
              <span> </span>
              <span className="contact-info"> +972-6598394</span>
            </div>
            <div className="footer-divider"></div>
          </div>

          <div className={`footer-policies ${layout.isRTL ? "rtl" : ""}`}>
            <div className="policy-item">
              <a>Cancellation Policy</a>
            </div>
            <div className="policy-divider"></div>
            <div className="side-menu-policy-item">
              <a>Update Reservation</a>
            </div>
            <div className="policy-divider"></div>
            <div className="policy-item">
              <a>Accessibility Statement</a>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-image"></div>
      <div className="credits-grid">
        <span className="tailor-rights"> כל הזכויות שמורות לטיילור</span>
        <span className="dev-rights">Dev: Ariel Shirkani</span>
        <span className="BT-design-rights">Designer: B/T Design</span>
      </div>
    </footer>
  );
}
