import React from "react";
import "../styles/roomcard.css";
import PeopleIcon from "../resources/images/people.svg";
import MeterIcon from "../resources/images/meter.svg";
import { useTranslation } from "react-i18next";

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
  return (
    <div className={`card-container ${isRTL ? "rtl" : ""}`}>
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-text">
        <h2 className="title">{title}</h2>
        <div className="sub-title">{subTitle}</div>
        <p className="description">{description}</p>
      </div>
      <div className="side-info-container">
        <img src={PeopleIcon}></img>
        <span>{t("roomCardAll.subInfoPeople")}</span>
        <img src={MeterIcon}></img>
        <span> {sideInfoMeter}</span>
      </div>
    </div>
  );
};

export default RoomCard;
