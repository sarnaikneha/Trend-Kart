import React from "react";
import "./Hero.css";
import arrow_icon from "../../assets/arrow_icon.png";

import women_shop from "../../assets/women_shop.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVAL ONLY</h2>
        <div className="hand-icon">
          <p>New</p>
        </div>
        <p>Collection</p>
        <p>for everyone</p>

        <div className="hero-button">
          <div>Latest coleection</div>
          <img
            src={arrow_icon}
            alt=""
            style={{ width: "30px", height: "auto" }}
          />
        </div>
      </div>
      <div className="hero-right"></div>
      <img src={women_shop} alt="" style={{ width: "30vw", height: "30vw" }} />
    </div>
  );
};
export default Hero;
