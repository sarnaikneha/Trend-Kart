import React from "react";
import img5 from "../../assets/img5.jpeg";
import "./Popular.css";

const Popular = () => {
  return (
    <div className="popular">
      <div className="left">
        <h2>Exclusive</h2>
        <h2> Offer For You</h2>
        <h5>Only on best sellers Products</h5>
        <button>Check Now</button>
      </div>
      <div className="right">
        <img src={img5} alt="" />
      </div>
    </div>
  );
};
export default Popular;
