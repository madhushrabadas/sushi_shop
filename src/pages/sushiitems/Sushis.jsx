import React, { useState } from "react";
import "./sushis.css";
import sushiData from "./data";
import { chineseData } from "./data";
import search from "../../assets/search.svg";

const SushiItem = ({ id, title, description, image }) => (
  <div className="sushi-item">
    <img src={image} alt={id} className="imgcard" />
    <h2>{title}</h2>
    <p>{description}</p>
    <button className="addtocart">+cart</button>
  </div>
);
const ChineseItem = ({ id, title, description, image }) => (
  <div className="sushi-item">
    <img src={image} alt={id} className="imgcard" />
    <h2>{title}</h2>
    <p>{description}</p>
    <button className="addtocart">+cart</button>
  </div>
);

const Sushis = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="Sushis">
      <div className="search">
        <label htmlFor=""> search best sushis in town</label>
        <div className="rightsrc">
          <input
            type="text"
            className="searchinp"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <img src={search} onClick={() => handleSearch()} alt="search" />
        </div>
      </div>
      <h1 className="h1sushi">Chinese Service</h1>
      <div className="sushi-list">
        {chineseData.map((sushi) => (
          <ChineseItem key={sushi.id} {...sushi} />
        ))}
      </div>
      <h1 className="h1sushi">Sushi Service</h1>
      <div className="sushi-list">
        {sushiData.map((sushi) => (
          <SushiItem key={sushi.id} {...sushi} />
        ))}
      </div>
    </div>
  );
};

export default Sushis;
