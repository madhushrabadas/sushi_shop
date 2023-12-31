import React from "react";


import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <header>
        <nav class="header__nav">
          <div class="header__logo">
            <h4 data-aos="fade-down">Sushimama</h4>
            <div class="header__logo-overlay"></div>
          </div>

          <ul class="header__menu" data-aos="fade-down">
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#food">Food</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#about-us">About Us</a>
            </li>
           
            <li>
              <a href="#about-us">Cart</a>
            </li>
          </ul>

          <ul class="header__menu-mobile" data-aos="fade-down">
            <li>
              <img src="assets/menu.svg" alt="menu" />
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
