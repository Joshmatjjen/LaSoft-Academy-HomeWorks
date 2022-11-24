import React from "react";
import { clsx } from "clsx";

const Button = ({ title, classes }) => {
  return (
    <div className={clsx(classes, "btn")}>
      <p>{title}</p>
    </div>
  );
};

export default Button;
