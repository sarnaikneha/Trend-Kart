import React, { useEffect, useState } from "react";
import "./MenProduct.css";
import { menProducts } from "../../Components/common/staticCommonData";
import { addToCart } from "../../Components/common/commonComponent";

const MenPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);
  return (
    <div className="men-page">
      <div className="title">
        <h2>Men's Collection</h2>
        <div className="category-list">
          <div className="category">
            western
            <div className="dropdown">
              <ul>
                <li>Dresses</li>
                <li>T-shirt</li>
                <li>Jeans & Trousers</li>
              </ul>
            </div>
          </div>

          <div className="category">
            Beauty & Health ⬇
            <div className="dropdown">
              <ul>
                <li>Skincare</li>
                <li>Haircare</li>
                <li>Makeup</li>
              </ul>
            </div>
          </div>

          <div className="category">
            Accessories ⬇
            <div className="dropdown">
              <ul>
                <li>Gym instrument</li>
                <li>Watches</li>
                <li>Bracelets</li>
              </ul>
            </div>
          </div>

          <div className="category">
            Bags & Footwear ⬇
            <div className="dropdown">
              <ul>
                <li>Handbags</li>
                <li>Sneakers</li>
                <li>Sandals</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <img
        src="https://tipsmake.com/data/images/collection-of-the-most-beautiful-fashion-banners-picture-32-8h2n0YQtr.jpg"
        alt="Banner"
      />
      <h2>Products</h2>

      <div className="men-products">
        {menProducts.map((product) => (
          <div key={product.id} className="men-product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3>{product.name}</h3>
            <p className="price">₹{product.price}</p>
            <p className="rating">⭐ {product.rating}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenPage;
