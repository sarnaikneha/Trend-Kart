import React, { useEffect, useState } from "react";
import "./Kidsproduct.css";
import { kidsProducts } from "../../Components/common/staticCommonData";
import { addToCart } from "../../Components/common/commonComponent";

const KidsPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  return (
    <div className="kids-page">
      <div className="title">
        <h2>Kid's Collection</h2>
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
            Accessories ⬇
            <div className="dropdown">
              <ul>
                <li>paying tools</li>
                <li>bagss</li>
                <li>toys</li>
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
        src="https://img.freepik.com/free-vector/hand-drawn-kids-toys-sale-banner_23-2149651210.jpg"
        alt=""
      />
      <h2>Kid's Collection</h2>

      <div className="kids-products">
        {kidsProducts.map((product) => (
          <div key={product.id} className="kids-product-card">
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

export default KidsPage;
