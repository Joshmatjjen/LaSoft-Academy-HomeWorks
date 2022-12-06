import React from "react";
import Select from "react-select";

import "./input.style.css";

const Input = ({ type, value, options, onChange, placeholder, isDisabled }) => (
  <>
    {type === "select" ? (
      <Select
        options={options}
        className="react-select-container"
        classNamePrefix="react-select"
        onChange={onChange}
        isDisabled={isDisabled}
      />
    ) : (
      <div className="input-box">
        <input
          value={value}
          type="text"
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    )}
  </>
);

export default Input;
