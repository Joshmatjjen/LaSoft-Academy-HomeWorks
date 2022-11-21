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
    <header class="header">
      <div class="header--content">
        <div class="logo">
          <a href="#">
            <img src={logo} alt="" srcset="" />
          </a>
        </div>
        <input
          class="menu-btn"
          type="checkbox"
          id="menu-btn"
          onClick={toggle}
        />
        <label class="menu-icon" for="menu-btn">
          <span class="nav-icon"></span>
        </label>
        <ul class="menu-list-container">
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
          <li class="menu__btn">
            <a class="btn" href="#" target="_self">
              Apply now
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
