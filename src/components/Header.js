import React from 'react';

import { NavLink } from "react-router-dom";


export default function Header() {

  return (
    <header id="header">
      <div className="header-top">
        <div className="container">
          <div className="row justify-content-center">
            <div id="logo">
              <NavLink exact to="/">
                <img src="img/logo.png" alt="" title="" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="container main-menu">
        <div className="row align-items-center justify-content-center d-flex">
          <nav id="nav-menu-container">
            <ul className="nav-menu">
              <li>
                <NavLink exact to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/menu">Menu</NavLink>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </nav>
          {/* <!-- #nav-menu-container -->*/}
        </div>
      </div>
    </header>
    // {/* <!-- #header --> */}
  );
}
