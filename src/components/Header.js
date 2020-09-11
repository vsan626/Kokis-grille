import React from 'react';

export default function Header() {
  return (
    <header id="header">
      <div className="header-top">
        <div className="container">
          <div className="row justify-content-center">
            <div id="logo">
              <a href="index.html">
                <img src="img/logo.png" alt="" title="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container main-menu">
        <div className="row align-items-center justify-content-center d-flex">
          <nav id="nav-menu-container">
            <ul className="nav-menu">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="about.html">About</a>
              </li>
              <li>
                <a href="menu.html">Menu</a>
              </li>
              <li>
                <a href="gallery.html">Gallery</a>
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
