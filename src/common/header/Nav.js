import React from "react";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";

const Nav = () => {
  return (
    <nav className="mainmenu-nav">
      <ul className="mainmenu">
        <li>
          <Link to={process.env.PUBLIC_URL + "/"}>Dream Career</Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/pricing-table"}>
            Subscription
          </Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/pricing-table"}>
            For Recruiters
          </Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/pricing-table"}>Resources</Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/about-us"}>About CLIF</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
