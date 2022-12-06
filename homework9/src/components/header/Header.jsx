import React from "react";
import { Link, useNavigate } from "react-router-dom";

import NavItem from "../NavItem";

import logo from "../../assets/img/logo.png";
import backArrow from "../../assets/img/backArrow.png";

const Header = ({ showBackButton }) => {
  const navigate = useNavigate();
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
          <Link to="/">
            <img src={logo} alt="" srcset="" />
          </Link>
        </div>

        {showBackButton ? (
          <div className="backBtn" onClick={() => navigate(-1)}>
            <img src={backArrow} alt="" />
            <p>Back</p>
          </div>
        ) : (
          <>
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
              <NavItem title="Course" type="link" routeTo={"/courses"} />
              <NavItem title="Teacher" type="link" routeTo={"/teachers"} />
              <NavItem title="About us" type="link" routeTo={"/about"} />
              <NavItem
                title="Apply now"
                type="button"
                routeTo={"/apply"}
                liClass="menu__btn"
                aClass="btn"
              />
            </ul>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
