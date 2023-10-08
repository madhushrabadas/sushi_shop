import React from "react";

import "./footer.css";
import twt from "../../assets/twitter.svg";
import fb from "../../assets/facebook.svg";
import ig from "../../assets/instagram.svg";
// import twt from "../../assets/twitter.svg";
// import twt from "../../assets/twitter.svg";
const Footer = () => {
  return (
    <div>
      {" "}
      <footer class="footer flex-between">
        <h3 class="footer__logo">
          <span>Sushi</span>mama
        </h3>

        <ul class="footer__nav">
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
        </ul>

        <ul class="footer__social">
          <li class="flex-center">
            <img src={fb} alt="facebook" />
          </li>
          <li class="flex-center">
            <img src={ig} alt="instagram" />
          </li>
          <li class="flex-center">
            <img src={twt} alt="twitterXXX" />
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
