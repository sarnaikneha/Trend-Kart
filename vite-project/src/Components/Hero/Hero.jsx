import React from "react";
import "./Hero.css";
import arrow_icon from "../../assets/arrow_icon.png";
import women_shop from "../../assets/women_shop.jpg";

// Static image to display (pick one from your previous list)
const heroImage =
  "https://m.media-amazon.com/images/G/31/img24/Fashion/AF/BAU/Winterflip/Unrec/herotator/Pc/SPB_1500x400._CB544017564_.jpg";

const Hero = () => {
  return (
    <div className="hero-container">
      {/* Title Above the Image */}
      <h1 className="hero-title">
        Get up to 20% cashback + Free Delivery on{" "}
        <span className="blink-text">First Order</span>
      </h1>

      {/* Static Image Display */}
      <div className="hero-image-wrapper">
        <img src={heroImage} alt="Hero Banner" className="hero-image" />
      </div>

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-left">
          <h2>NEW ARRIVAL </h2>
          <h5>New</h5>
          <h5>Collection</h5>
          <h5>for everyone</h5>

          <div className="hero-button">
            <div>
              <button>Latest collection</button>
            </div>
            <img
              src={arrow_icon}
              alt="arrow icon"
              style={{ width: "30px", height: "auto" }}
            />
          </div>
        </div>
        <div className="hero-right">
          <img
            src={women_shop}
            alt="Shop"
            style={{ width: "30vw", height: "30vw" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
