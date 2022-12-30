import React from "react";

import NavItem from "../NavItem";

const Footer = () => {
  return (
    <footer>
      <div className="footer--container">
        <div>
          <p>©Simple Art, Inc. {new Date().getFullYear()}</p>
          <p>All rights reserved</p>
        </div>
        <ul className="footer-nav">
          <NavItem title="Terms" />
          <NavItem title="Privacy Policy" />
          <NavItem title="Help & Support" />
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
