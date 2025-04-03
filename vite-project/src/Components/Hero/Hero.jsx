import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Hero.css";
import arrow_icon from "../../assets/arrow_icon.png";
import women_shop from "../../assets/women_shop.jpg";
import Collection from "../Collection/CollectionPro";

const heroImages = [
  "https://m.media-amazon.com/images/G/31/img24/Fashion/AF/BAU/Winterflip/Unrec/herotator/Pc/SPB_1500x400._CB544017564_.jpg",
  "https://img.freepik.com/premium-psd/banner-template-online-fashion-sale_23-2148585403.jpg",
  "https://img.freepik.com/free-psd/horizontal-banner-template-big-sale-with-woman-shopping-bags_23-2148786755.jpg",
  "https://img.freepik.com/free-vector/gradient-shopping-discount-horizontal-sale-banner_23-2150321996.jpg",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-container">
      <div className="text">
        <h1 className="hero-title">
          Get up to 20% cashback + Free Delivery on{" "}
          <span className="blink-text">First Order</span>
        </h1>
      </div>

      <div className="hero-image-wrapper">
        <img
          src={heroImages[currentIndex]}
          alt="Hero Banner"
          className="hero-image fade-in"
        />
      </div>

      <div className="hero">
        <div className="hero1">
          <div className="hero-left">
            <h2>NEW ARRIVAL </h2>
            <h5>New</h5>
            <h5>Collection</h5>
            <h5>for everyone</h5>

            <div className="hero-button">
              <button onClick={() => navigate("../Collection/Collection.jsx")}>
                Latest collection
              </button>
            </div>
          </div>
          <div className="scroll-container">
            <img
              src="https://img.freepik.com/free-photo/two-beautiful-women-shopping-town_1303-16426.jpg"
              alt="Scrolling Image"
              className="scrolling-image"
            />
          </div>
          <div className="hero-left">
            <h2>NEW ARRIVAL </h2>
            <h5>New</h5>
            <h5>Collection</h5>
            <h5>for everyone</h5>

            <div className="hero-button">
              <button onClick={() => navigate("../Collection/Collection.jsx")}>
                Latest collection
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="last">
        <div className="lastdiv">
          <h2>Exclusive Offer!</h2>
          <p>Get up to 50% off on your first purchase. Limited time offer.</p>
          <button
            className="shop-now"
            onClick={() => navigate("../Collection/Collection.jsx")}
          >
            Shop Now
          </button>
        </div>
        <div>
          <div className="hero-video">
            <video controls autoPlay loop muted>
              <source
                src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/Bo-ziHq_jlbqx8330/videoblocks-sell16_bf6eitlb3__2de05e0e4d9479db30a1bf08385a1810__P360.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
