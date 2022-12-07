import React from "react";

import "./imageIcon.styles.css";

const ImageIcon = ({ title, icon }) => {
  return (
    <div className="icon-box">
      <img src={icon} alt="" />
      {title && <p>{title}</p>}
    </div>
  );
};

export default ImageIcon;
