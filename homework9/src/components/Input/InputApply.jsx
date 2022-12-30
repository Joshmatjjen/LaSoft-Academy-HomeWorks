import React from "react";

import Input from "./Input";

import "./input.style.css";

const InputApply = ({ title, ...inputProps }) => (
  <div className="input-apply">
    <p>{title}</p>
    <Input {...inputProps} />
  </div>
);

export default InputApply;
