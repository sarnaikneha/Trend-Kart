import React from "react";

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
        <img
          src={
            "https://t3.ftcdn.net/jpg/05/33/69/68/360_F_533696861_3JSZjCkdWZpXh91gd2gR3X3FJIMzISFX.jpg"
          }
          alt=""
        />
      </div>
    </div>
  );
};
export default Popular;
