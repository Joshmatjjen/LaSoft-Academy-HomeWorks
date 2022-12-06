import React from "react";

import Input from "./Input";

import "./input.style.css";

const InputApply = ({
  title,
  value,
  type,
  options,
  onChange,
  placeholder,
  isDisabled,
}) => (
  <div className="input-apply">
    <p>{title}</p>
    <Input
      value={value}
      type={type}
      options={options}
      onChange={onChange}
      placeholder={placeholder}
      isDisabled={isDisabled}
    />
  </div>
);

export default InputApply;
