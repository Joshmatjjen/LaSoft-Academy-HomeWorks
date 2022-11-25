import React from "react";

const NavItem = ({ title, liClass, aClass }) => (
  <li className={liClass}>
    <a className={aClass} href="#" target="_self">
      {title}
    </a>
  </li>
);

export default NavItem;
