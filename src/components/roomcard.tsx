import React, { useState, useEffect } from "react";
import "../styles/roomcard.css";
import PeopleIcon from "../resources/images/people.svg";
import MeterIcon from "../resources/images/meter.svg";
import { useTranslation } from "react-i18next";
import { createPortal } from "react-dom";
import EmbelaImageSlider from "./embelaImageSlider";
import IconCloseWhite from "../resources/images/hamburgerIconCloseWhite.svg";

interface RoomCardProps {
  title: string;
  subTitle: string;
  imageUrl: string;
  description: string;
  sideInfoMeter: string;
  roomImages: string[];
}

const RoomCard: React.FC<RoomCardProps> = ({
  title,
  subTitle,
  imageUrl,
  description,
  sideInfoMeter,
  roomImages,
}) => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "he";
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const modal = open ? (
    <div className="modal-overlay" onClick={() => setOpen(false)}>
      {/* Close Button */}
      <div className="modal-close-button" onClick={() => setOpen(false)}>
        <img src={IconCloseWhite} alt="close"></img>
      </div>
      <div
        className={`modal-content ${isRTL ? "rtl" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-text">
          <div className="modal-title">{title}</div>
          <div className="modal-sub-title">{subTitle}</div>
          <p className="modal-description">{description}</p>
        </div>

        {/* <img src={imageUrl} className="modal-image" /> */}
        <EmbelaImageSlider images={roomImages} />
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
