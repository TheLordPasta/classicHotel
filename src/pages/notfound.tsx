import { Link } from "react-router-dom";
import "../styles/notfound.css";
import { useTranslation } from "react-i18next";

function NotFound() {
  const { t } = useTranslation();
  return (
    <div className="not-found-container">
      <h1>{t("notFoundPage.notFoundTitle")}</h1>
      <p>{t("notFoundPage.notFoundText")}</p>
      <Link className="link-text" to="/homePage">
        {t("notFoundPage.goBackLinkText")}
      </Link>
    </div>
  );
}

export default NotFound;
