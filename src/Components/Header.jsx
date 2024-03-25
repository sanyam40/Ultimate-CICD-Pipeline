import React from "react";

import logo from "../Components/resources/images/logo.png";

const Header = () => {
  return (
    <div>
      <header>
        <a href="#" className="logo">
          <img src={logo} alt="logo" />
        </a>

        <ul className="navmenu">
          <li>
            <a href="home">home</a>
          </li>
          <li>
            <a href="#">shop</a>
          </li>
          <li>
            <a href="#">products</a>
          </li>
          <li>
            <a href="#">page</a>
          </li>
          <li>
            <a href="#">Docs</a>
          </li>
        </ul>

        <div className="nav-icon">
          <a href="#">
            <i className="bx bx-search"></i>
          </a>
          <a href="login-page">
            <i className="bx bx-user"></i>
          </a>
          <a href="display-cart">
            <i className="bx bx-cart"></i>
          </a>

          <div className="bx bx-menu" id="menu-icon"></div>
        </div>
      </header>
    </div>
  );
};

export default Header;
