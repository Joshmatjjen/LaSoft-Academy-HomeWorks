import React from "react";
import { clsx } from "clsx";
import "./imageBackground.styles.css";

const ImageBackground = ({ image, className, alt }) => {
  return (
    <div className={clsx(className, "img-bg")}>
      <div></div>
      <img src={image} alt={alt} />
    </div>
  );
};

export default ImageBackground;
