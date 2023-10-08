import React from "react";

import "./popular.css";
import s9 from "../../assets/sushi-9.png" 
import s6 from "../../assets/sushi-6.png" 
import s8 from "../../assets/sushi-8.png" 
import s7 from "../../assets/sushi-7.png" 
import s11 from "../../assets/sushi-11.png" 
import s10 from "../../assets/sushi-10.png" 
import s12 from "../../assets/sushi-12.png" 
import star from "../../assets/star.svg" 
 
const Popular = () => {
  return (
    <div>
      <section class="popular-foods" id="menu">
        <h2 class="popular-foods__title" data-aos="flip-up">
          Popular Food / 人気
        </h2>

        <div
          class="popular-foods__filters sushi__hide-scrollbar"
          data-aos="fade-up"
        >
          <button class="popular-foods__filter-btn active">All</button>
          <button class="popular-foods__filter-btn">
            <img src={s9} alt="sushi 9" />
            Sushi
          </button>
          <button class="popular-foods__filter-btn">
            <img src={s8} alt="sushi 8" />
            Ramen
          </button>
          <button class="popular-foods__filter-btn">
            <img src={s7} alt="sushi 7" />
            Udon
          </button>
          <button class="popular-foods__filter-btn">
            <img src={s6} alt="sushi 6" />
            Danggo
          </button>
          <button class="popular-foods__filter-btn">All</button>
        </div>

        <div class="popular-foods__catalogue" data-aos="fade-up">
          <article class="popular-foods__card">
            <img
              class="popular-foods__card-image"
              src={s12}
              alt="sushi-12"
            />
            <h4 class="popular-foods__card-title">Chezu Sushi</h4>

            <div class="popular-foods__card-details flex-between">
              <div class="popular-foods__card-rating">
                <img src={star} alt="star" />
                <p>4.9</p>
              </div>

              <p class="popular-foods__card-price">$21.00</p>
            </div>
          </article>

          <article class="popular-foods__card active-card">
            <img
              class="popular-foods__card-image"
              src={s11}
              alt="sushi-11"
            />
            <h4 class="popular-foods__card-title">Original Sushi</h4>

            <div class="popular-foods__card-details flex-between">
              <div class="popular-foods__card-rating">
                <img src={star} alt="star" />
                <p>5.0</p>
              </div>

              <p class="popular-foods__card-price">$19.00</p>
            </div>
          </article>

          <article class="popular-foods__card">
            <img
              class="popular-foods__card-image"
              src={s10}
              alt="sushi-10"
            />
            <h4 class="popular-foods__card-title">Ramen Legendo</h4>

            <div class="popular-foods__card-details flex-between">
              <div class="popular-foods__card-rating">
                <img src={star} alt="star" />
                <p>4.7</p>
              </div>

              <p class="popular-foods__card-price">$13.00</p>
            </div>
          </article>
        </div>

        <button class="popular-foods__button">
          Explore Food
          <img src="assets/arrow-right.svg" alt="arrow-right" />
        </button>
      </section>
    </div>
  );
};

export default Popular;
