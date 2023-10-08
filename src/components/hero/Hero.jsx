import React from "react";

import './hero.css'
// import user from "../../assets/user.png" 
import s1 from "../../assets/sushi-1.png" 
import pc from "../../assets/play-circle.svg" 


const Hero = () => {
  return (
    <div> 
      <section class="hero">
        <div class="hero-image">
          <img src={s1} alt="sushi" data-aos="fade-up" />
          <h2 data-aos="fade-up">
            日 <br />
            本 <br />食
          </h2>

          <div class="hero-image__overlay"></div>
        </div>

        <div class="hero-content">
          <div class="hero-content-info" data-aos="fade-left">
            <h1>Feel the taste of Japanese food</h1>
            <p>
              Feel the taste of the most popular Japanese food from anywhere and
              anytime.
            </p>

            <div class="hero-content__buttons">
              <button class="hero-content__order-button">Order Now</button>
              <button class="hero-content__play-button">
                <img src={pc} alt="play" />
                How to Order
              </button>
            </div>
          </div>

          <div class="hero-content__testimonial" data-aos="fade-up">
            <div class="hero-content__customer flex-center">
              <h4>
                24<span>k+</span>
              </h4>
              <p>Happy Customers</p>
            </div>

            <div class="hero-content__review">
              <img 
              // src={user}
               alt="user" />
              <p>
                "This is the best Japanese food delivery service that ever
                existed."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
