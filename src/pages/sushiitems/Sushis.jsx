 
import React from "react";
import './sushis.css'
import sushiData from './data'
  

const SushiItem = ({ id, title, description, image }) => (
  <div className="sushi-item">
    <img src={image} alt={id} className="imgcard"/>
    <h2>{title}</h2>
    <p>{description}</p>
    <button className="addtocart">+cart</button>
  </div>
);

const Sushis = () => {
  return (
    <div className="Sushis">
      <h1>Sushi Service</h1>
      <div className="sushi-list">
        {sushiData.map((sushi) => (
          <SushiItem key={sushi.id} {...sushi} />
        ))}
      </div>
    </div>
  );
};

export default Sushis;
