import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./WomenPro.css";
import { womenProducts } from "../../Components/common/staticCommonData";
import { addToCart } from "../../Components/common/commonComponent";

const WomenPage = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

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
          {/* Western Wear */}
          <div className="category">
            Western ⬇
            <div className="dropdown">
              <ul>
                <li
                  onClick={() =>
                    navigate("/src/Components/Collection/Collection.jsx")
                  }
                >
                  Dresses
                </li>
                <li
                  onClick={() =>
                    navigate("/src/Components/Collection/Collection.jsx")
                  }
                >
                  Tops
                </li>
                <li
                  onClick={() =>
                    navigate("/src/Components/Collection/Collection.jsx")
                  }
                >
                  Jeans & Trousers
                </li>
              </ul>
            </div>
          </div>

          {/* Beauty & Health */}
          <div className="category">
            Beauty & Health ⬇
            <div className="dropdown">
              <ul>
                <li
                  onClick={() =>
                    navigate("/src/Components/Collection/Collection.jsx")
                  }
                >
                  Skincare
                </li>
                <li
                  onClick={() =>
                    navigate("/src/Components/Collection/Collection.jsx")
                  }
                >
                  Haircare
                </li>
                <li
                  onClick={() =>
                    navigate("/src/Components/Collection/Collection.jsx")
                  }
                >
                  Makeup
                </li>
              </ul>
            </div>
          </div>

          {/* Jewelry & Accessories */}
          <div className="category">
            Jewelry & Accessories ⬇
            <div className="dropdown">
              <ul>
                <li
                  onClick={() =>
                    navigate("/src/Components/Collection/Collection.jsx")
                  }
                >
                  Earrings
                </li>
                <li
                  onClick={() =>
                    navigate("/src/Components/Collection/Collection.jsx")
                  }
                >
                  Necklaces
                </li>
                <li
                  onClick={() =>
                    navigate("/src/Components/Collection/Collection.jsx")
                  }
                >
                  Bracelets
                </li>
              </ul>
            </div>
          </div>

          {/* Bags & Footwear */}
          <div className="category">
            Bags & Footwear ⬇
            <div className="dropdown">
              <ul>
                <li
                  onClick={() =>
                    navigate("/src/Components/Collection/Collection.jsx")
                  }
                >
                  Handbags
                </li>
                <li
                  onClick={() =>
                    navigate("/src/Components/Collection/Collection.jsx")
                  }
                >
                  Sneakers
                </li>
                <li
                  onClick={() =>
                    navigate("/src/Components/Collection/Collection.jsx")
                  }
                >
                  Sandals
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <img
        src="https://i.pinimg.com/736x/ba/65/e2/ba65e2699cf758b587a820d5529ed9ea.jpg"
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
