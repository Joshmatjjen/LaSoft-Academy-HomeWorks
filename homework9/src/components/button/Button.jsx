import React from "react";

const Button = ({ title, classes }) => {
  return (
    <div class={classes + " btn"}>
      <p>{title}</p>
    </div>
  );
};

export default Button;
