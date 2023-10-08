import React from 'react' 

import './about.css'
import s2 from "../../assets/sushi-2.png" 
import s3 from "../../assets/sushi-3.png" 
import aur from "../../assets/arrow-up-right.svg" 


const About = () => {
  return (
    <div> <section class="about-us" id="about-us">
    <div class="about-us__image">
      <div class="about-us__image-sushi3">
        <img src={s3} alt="sushi" data-aos="fade-right" />
      </div>

      <button class="about-us__button">
        Learn More

        <img src={aur} alt="learn more" />
      </button>

      <div class="about-us__image-sushi2">
        <img src={s2} alt="sushi" data-aos="fade-right" />
      </div>
    </div>

    <div class="about-us__content" data-aos="fade-left">
      <p class="sushi__subtitle">About Us / 私たちに関しては</p>
      <h3 class="sushi__title">
        Our mission is to bring true Japanese flavours to you.
      </h3>
      <p class="sushi__description">
        We will continue to provide the experience of Omotenashi, the Japanese
        mindset of hospitality, with our shopping and dining for our
        customers.
      </p>
    </div>
  </section></div>
  )
}

export default About