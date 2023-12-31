import React from "react";

import "./trending.css";

import check from "../../assets/check.svg";
import s5 from "../../assets/sushi-5.png";
import s4 from "../../assets/sushi-4.png";
import av from "../../assets/arrow-vertical.svg";
import ah from "../../assets/arrow-horizontal.svg";
// import check from "../../assets/check.svg";
// import check from "../../assets/check.svg";

const Trending = () => {
  return (
    <div>
      {" "}
      <section class="trending" id="food">
        <section class="trending-sushi">
          <div class="trending__content" data-aos="fade-right">
            <p class="sushi__subtitle">What’s Trending / トレンド</p>

            <h3 class="sushi__title">Japanese Sushi</h3>
            <p class="sushi__description">
              Feel the taste of the most delicious Sushi here.
            </p>

            <ul class="trending__list flex-between">
              <li>
                <div class="trending__icon flex-center">
                  <img src={check} alt="check" />
                </div>
                <p>Make Sushi</p>
              </li>
              <li>
                <div class="trending__icon flex-center">
                  <img src={check} alt="check" />
                </div>
                <p>Oshizushi</p>
              </li>
              <li>
                <div class="trending__icon flex-center">
                  <img src={check} alt="check" />
                </div>
                <p>Uramaki Sushi</p>
              </li>
              <li>
                <div class="trending__icon flex-center">
                  <img src={check} alt="check" />
                </div>
                <p>Nigiri Sushi</p>
              </li>
              <li>
                <div class="trending__icon flex-center">
                  <img src={check} alt="check" />
                </div>
                <p>Temaki Sushi</p>
              </li>
              <li>
                <div class="trending__icon flex-center">
                  <img src={check} alt="check" />
                </div>
                <p>Inari Sushi</p>
              </li>
            </ul>
          </div>

          <div class="trending__image flex-center">
            <img src={s5} alt="sushi-5" data-aos="fade-left" />

            <div class="trending__arrow trending__arrow-left">
              <img src={av} alt="arrow vertical" />
            </div>

            <div class="trending__arrow trending__arrow-bottom">
              <img src={ah} alt="arrow horizontal" />
            </div>
          </div>
        </section>

        <div class="trending__discover" data-aos="zoom-in">
          <p>Discover</p>
        </div>

        <section class="trending-drinks">
          <div class="trending__image flex-center">
            <img src={s4} alt="sushi-4" data-aos="fade-right" />

            <div class="trending__arrow trending__arrow-top">
              <img src={ah} alt="arrow horizontal" />
            </div>

            <div class="trending__arrow trending__arrow-right">
              <img src={av} alt="arrow vertical" />
            </div>
          </div>

          <div class="trending__content" data-aos="fade-left">
            <p class="sushi__subtitle">What’s Trending / トレンド</p>

            <h3 class="sushi__title">Japanese Drinks</h3>
            <p class="sushi__description">
              Feel the taste of the most delicious Japense drinks here.
            </p>

            <ul class="trending__list flex-between">
              <li>
                <div class="trending__icon flex-center">
                  <img src={check} alt="check" />
                </div>
                <p>Oruncha</p>
              </li>
              <li>
                <div class="trending__icon flex-center">
                  <img src={check} alt="check" />
                </div>
                <p>Sakura Tea</p>
              </li>
              <li>
                <div class="trending__icon flex-center">
                  <img src={check} alt="check" />
                </div>
                <p>Aojiru</p>
              </li>
              <li>
                <div class="trending__icon flex-center">
                  <img src={check} alt="check" />
                </div>
                <p>Ofukucha</p>
              </li>
              <li>
                <div class="trending__icon flex-center">
                  <img src={check} alt="check" />
                </div>
                <p>Kombu-cha</p>
              </li>
              <li>
                <div class="trending__icon flex-center">
                  <img src={check} alt="check" />
                </div>
                <p>Mugicha</p>
              </li>
            </ul>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Trending;
