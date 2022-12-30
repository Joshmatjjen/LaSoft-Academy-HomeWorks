import React from "react";
import { Link, useLocation } from "react-router-dom";
import { clsx } from "clsx";

const NavItem = ({ title, type, liClass, aClass, routeTo }) => {
  const { pathname } = useLocation();

  return (
    <li className={liClass}>
      <Link
        className={clsx(
          {
            active: pathname === routeTo && type === "link",
          },
          aClass
        )}
        to={routeTo || "/"}
      >
        {title}
      </Link>
    </li>
  );
};

export default NavItem;
