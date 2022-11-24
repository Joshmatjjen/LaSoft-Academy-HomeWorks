import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer--container">
        <div>
          <p>©Simple Art, Inc. 2021</p>
          <p>All rights reserved</p>
        </div>
        <ul className="footer-nav">
          <li>
            <a href="#" target="_self">
              Terms
            </a>
          </li>
          <li>
            <a href="#" target="_self">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" target="_self">
              Help & Support
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
