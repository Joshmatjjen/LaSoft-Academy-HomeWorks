import React from "react";
import { useNavigate } from "react-router-dom";

import successImg from "../../assets/img/success.png";

import "./success.styles.css";
const Success = ({ title, subtitle, buttonTitle }) => {
  const navigate = useNavigate();
  return (
    <div className="content success--content">
      <div className="success--content-info">
        <img src={successImg} alt="" />
        <h3>{title}</h3>
        <p>{subtitle}</p>
        <div
          className="success--content-info-btn"
          onClick={() => navigate("/")}
        >
          <p>{buttonTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Success;
