import React from "react";

import logo from "../../assets/img/logo.png";

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
          <li>
            <a href="#" target="_self">
              Course
            </a>
          </li>
          <li>
            <a href="#" target="_self">
              Teacher
            </a>
          </li>
          <li>
            <a href="#" target="_self">
              Price
            </a>
          </li>
          <li>
            <a href="#" target="_self">
              About us
            </a>
          </li>
          <li className="menu__btn">
            <a className="btn" href="#" target="_self">
              Apply now
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
