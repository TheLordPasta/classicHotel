import "../styles/hotelwelcome.css";
import { useTranslation } from "react-i18next";
import "../styles/homeServices.css";
import QAAccordion from "./QAAccortion";

const HomeServices: React.FC = () => {
  const qaItems = [
    {
      question: "איזו שירותים ניתן לקבל במלון?",
      answer:
        "המלון מציע מגוון שירותים כגון ארוחת בוקר ישראלית עשירה, קבלה פעילה 24 שעות, ניקיון יומי ועוד.",
    },
    {
      question: "האם מסעדת המלון כשרה?",
      answer: "כן, המסעדה כשרה תחת פיקוח מקומי. אנא פנו לקבלה לפרטים נוספים.",
    },
    {
      question: "האם ניתן לבצע צ'ק אאוט מאוחר?",
      answer:
        "צ'ק אין החל מהשעה 15:00 וצ'ק אאוט עד השעה 12:00. בקשות לצ'ק אאוט מאוחר תלויות בזמינות ויכולות להיות כרוכות בתשלום.",
    },
    {
      question: "האם ניתן לקיים אירועים במלון?",
      answer:
        "כן, המלון מאפשר קיום אירועים קטנים ובינוניים. הצוות שלנו ישמח לעזור בתכנון האירוע.",
    },
    {
      question: "איזה שירותים ניתן לקבל במלון?",
      answer:
        "שירותי כביסה, אינטרנט אלחוטי מהיר, חדר כושר, וסיוע תיירותי בהזמנת טיולים.",
    },
  ];
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "he";
  return (
    <div className={`hotel-services-container ${isRTL ? "rtl" : ""}`}>
      <div className={`hotel-services-grid ${isRTL ? "rtl" : ""}`}>
        <div className="text-container-services">
          <p className="sub-header-services">
            {t("homeServices.homeServicesText")}
          </p>
          <ul className="sub-text-services-list">
            <li>{t("homeServices.homeServicesBreakfast")}</li>
            <li>{t("homeServices.homeServicesReseption")}</li>
            <li>{t("homeServices.homeServicesInternet")}</li>
            <li>{t("homeServices.homeServicesHouseCleaning")}</li>
            <li>{t("homeServices.homeServicesLuggage")}</li>
            <li>{t("homeServices.homeServicesLaundry")}</li>
            <li>{t("homeServices.homeServicesRoomService")}</li>
            <li>{t("homeServices.homeServicesRooftop")}</li>
          </ul>
        </div>
        <div className="qa-container">
          <QAAccordion items={qaItems} />
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
