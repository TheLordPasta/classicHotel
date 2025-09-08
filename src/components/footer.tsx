import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/footer.css";
import { useTranslation } from "react-i18next";
import {
  faLinkedin,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const { i18n, t } = useTranslation();
  const direction = i18n.language === "he" ? "rtl" : "ltr";

  return (
    <footer className="footer-container" dir={direction}>
      <h1 className="hotel-name">{t("footer.footerTitle")}</h1>
      <div className="footer-content">
        <div className="footer-section left">
          <p>{t("footer.footerSectionLeftContactUsText")}</p>
          <p className="contact-info">📞 +972-6598394</p>
          <p>
            ✉️&nbsp;
            <a className="contact-info" href="mailto:hello@tailorhotel.com">
              hello@thetailortlv.com
            </a>
          </p>

          <div className="social-icons">
            <p>{t("footer.footerSectionLeftFollowUsText")}</p>
            <span className="social-icon">
              <FontAwesomeIcon icon={faInstagram} color="#C13584" />
            </span>
            <span className="social-icon">
              <FontAwesomeIcon icon={faLinkedin} color="#0077B5" />
            </span>
            <span className="social-icon">
              <FontAwesomeIcon icon={faFacebook} color="#1877F2" />
            </span>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-section middle">
          <a href="/attractions">
            {t("footer.footerSectionMiddleAttractionText")}
          </a>
          <a href="/Media">{t("footer.footerSectionMiddleMediaText")}</a>
          <a href="/Sitemap">{t("footer.footerSectionMiddleSitemapText")}</a>
          <a href="/terms&conditions">
            {t("footer.footerSectionMiddleTermsAndConditionsText")}
          </a>
        </div>

        <div className="footer-divider" />

        <div className="footer-section right">
          <p>📶 {t("footer.footerSectionRightWifiText")}</p>
          <a href="/accessibility">
            {t("footer.footerSectionRightAccessibilityText")}
          </a>
          <a href="/Privacy-Policy">
            {t("footer.footerSectionRightPrivacyPolicyText")}
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>🔒 {t("footer.footerSecuredWebsiteText")}</p>
      </div>
    </footer>
  );
}
