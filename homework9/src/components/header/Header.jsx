import React from "react";

import logo from "../../assets/img/logo.png";
import NavItem from "../NavItem";

const Header = () => {
  const cb = document.querySelector("#menu-btn");
  const body = document.getElementsByTagName("BODY")[0];

  const toggle = () => {
    if (cb.checked) {
      body.classList.add("hide-scroll");
    } else {
      body.classList.remove("hide-scroll");
    }
  };

  return (
    <header className="header">
      <div className="header--content">
        <div className="logo">
          <a href="#">
            <img src={logo} alt="" srcset="" />
          </a>
        </div>
        <input
          className="menu-btn"
          type="checkbox"
          id="menu-btn"
          onClick={toggle}
        />
        <label className="menu-icon" for="menu-btn">
          <span className="nav-icon"></span>
        </label>
        <ul className="menu-list-container">
          <NavItem title="Course" />
          <NavItem title="Teacher" />
          <NavItem title="Price" />
          <NavItem title="About us" />
          <NavItem title="Apply now" liClass="menu__btn" aClass="btn" />
        </ul>
      </div>
    </header>
  );
};

export default Header;
