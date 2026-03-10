import React from "react";
import "../styles/orderNow.css";
import { useTranslation } from "react-i18next";

const OrderNow: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="order-now-wrapper">
      <button className="order-now-button">{t("orderNow.text")}</button>
    </div>
  );
};

export default OrderNow;
