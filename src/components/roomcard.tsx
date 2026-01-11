import React, { useState, useEffect } from "react";
import "../styles/roomcard.css";
import PeopleIcon from "../resources/images/people.svg";
import MeterIcon from "../resources/images/meter.svg";
import { useTranslation } from "react-i18next";
import { createPortal } from "react-dom";

interface RoomCardProps {
  title: string;
  subTitle: string;
  imageUrl: string;
  description: string;
  sideInfoMeter: string;
}

const RoomCard: React.FC<RoomCardProps> = ({
  title,
  subTitle,
  imageUrl,
  description,
  sideInfoMeter,
}) => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "he";
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const modal = open ? (
    <div className="modal-overlay" onClick={() => setOpen(false)}>
      <div
        className={`modal-content ${isRTL ? "rtl" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <img src={imageUrl} className="modal-image" />
        <h2>{title}</h2>
        <h4>{subTitle}</h4>
        <p className="modal-description">{description}</p>
      </div>
    </div>
  ) : null;

  return (
    <>
      {/* CARD */}
      <div
        className={`card-container ${isRTL ? "rtl" : ""}`}
        role="button"
        onClick={() => setOpen(true)}
      >
        <img src={imageUrl} alt={title} className="card-image" />
        <div className="card-text">
          <div className="title">{title}</div>
          <div className="sub-title">{subTitle}</div>
          <p className="description">{description}</p>
        </div>
        <div className="side-info-container">
          <img src={PeopleIcon} />
          <span>{t("roomCardAll.subInfoPeople")}</span>
          <img src={MeterIcon} />
          <span>{sideInfoMeter}</span>
        </div>
      </div>

      {/* PORTAL */}
      {open && createPortal(modal, document.getElementById("modal-root")!)}
    </>
  );
};

export default RoomCard;
