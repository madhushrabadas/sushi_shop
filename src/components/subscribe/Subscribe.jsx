import React from "react";

import "./subscribe.css";
const Subscribe = () => {
  return (
    <div>
      <section class="subscription flex-center" id="services">
        <h2 data-aos="flip-down">
          Get offers stright <br />
          to your inbox
        </h2>
        <p data-aos="fade-up">Sign up for the Sushimama newsletter</p>

        <div class="subscription__form" data-aos="fade-up">
          <input type="text" placeholder="Enter your email address" />
          <button>Get Started</button>
        </div>
      </section>
    </div>
  );
};

export default Subscribe;
