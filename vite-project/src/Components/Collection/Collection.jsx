import React from "react";
import "./Collection.css";

const products = {
  men: [
    {
      id: 1,
      name: "Men's Jacket",
      price: 49.99,
      image: "https://via.placeholder.com/200?text=Men+Jacket",
    },
    {
      id: 2,
      name: "Men's Sneakers",
      price: 59.99,
      image: "https://via.placeholder.com/200?text=Men+Sneakers",
    },
  ],
  women: [
    {
      id: 3,
      name: "Women's Handbag",
      price: 39.99,
      image: "https://via.placeholder.com/200?text=Women+Handbag",
    },
    {
      id: 4,
      name: "Women's Sunglasses",
      price: 29.99,
      image: "https://via.placeholder.com/200?text=Women+Sunglasses",
    },
  ],
  kids: [
    {
      id: 5,
      name: "Kids' Backpack",
      price: 19.99,
      image: "https://via.placeholder.com/200?text=Kids+Backpack",
    },
    {
      id: 6,
      name: "Kids' Hat",
      price: 14.99,
      image: "https://via.placeholder.com/200?text=Kids+Hat",
    },
  ],
};

const ProductCard = ({ image, name, price }) => (
  <div className="product-card">
    <img src={image} alt={name} className="product-image" />
    <h3 className="product-name">{name}</h3>
    <p className="product-price">${price}</p>
    <button className="buy-now">Buy Now</button>
  </div>
);

const Shop = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="shop-nav">
        <a href="#home">Home</a>
        <a href="#men">Men</a>
        <a href="#women">Women</a>
        <a href="#kids">Kids</a>
      </nav>

      {/* Hero Section */}
      <div id="home" className="hero">
        <h1>Shop the Latest Trends</h1>
        <p>Get up to 50% off on selected items</p>
        <button className="shop-now">Shop Now</button>
      </div>

      {/* Men's Section */}
      <div id="men" className="category-section">
        <h2>Men's Accessories</h2>
        <div className="product-grid">
          {products.men.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>

      {/* Women's Section */}
      <div id="women" className="category-section">
        <h2>Women's Accessories</h2>
        <div className="product-grid">
          {products.women.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>

      {/* Kids' Section */}
      <div id="kids" className="category-section">
        <h2>Kids' Accessories</h2>
        <div className="product-grid">
          {products.kids.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer>
        <p>© 2025 TrendKart. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Shop;
