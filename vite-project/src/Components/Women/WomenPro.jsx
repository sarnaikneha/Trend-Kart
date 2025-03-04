import React, { useState, useEffect } from "react";
import "./WomenPro.css";
import { womenProducts } from "../../Components/common/staticCommonData";
import { addToCart } from "../../Components/common/commonComponent";

const WomenPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);
  return (
    <div className="women-page">
      <div className="title">
        <h2>Women's Collection</h2>
        <div className="category-list">
          <div className="category">
            western
            <div className="dropdown">
              <ul>
                <li>Dresses</li>
                <li>Tops</li>
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
            Jewelry & Accessories ⬇
            <div className="dropdown">
              <ul>
                <li>Earrings</li>
                <li>Necklaces</li>
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
        src="https://img.freepik.com/free-vector/fashion-trends-sale-banner-template_23-2150769839.jpg"
        alt="Banner"
      />
      <h2>Products</h2>

      <div className="women-products">
        {womenProducts.map((product) => (
          <div key={product.id} className="women-product-card">
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

export default WomenPage;
