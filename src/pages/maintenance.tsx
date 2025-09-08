import "../styles/maintenance.css";
import { useTranslation } from "react-i18next";

function MaintenancePage() {
  const { t } = useTranslation();
  return (
    <div className="container">
      <h1>{t("maintenancePage.maintenanceTitle")}</h1>
      <p>{t("maintenancePage.maintenanceText")}</p>
    </div>
  );
}

export default MaintenancePage;
