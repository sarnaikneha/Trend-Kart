import React, { useEffect, useState } from "react";
import "./Kidsproduct.css";
import { kidsProducts } from "../../Components/common/staticCommonData";
import { addToCart } from "../../Components/common/commonComponent";
import { useNavigate } from "react-router-dom";

const KidsPage = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

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

          <div className="category">
            Accessories ⬇
            <div className="dropdown">
              <ul>
                <li
                  onClick={() =>
                    navigate("/src/Components/Collection/Collection.jsx")
                  }
                >
                  paying tools
                </li>
                <li
                  onClick={() =>
                    navigate("/src/Components/Collection/Collection.jsx")
                  }
                >
                  bagss
                </li>
                <li
                  onClick={() =>
                    navigate("/src/Components/Collection/Collection.jsx")
                  }
                >
                  toys
                </li>
              </ul>
            </div>
          </div>

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
        src="https://img.freepik.com/premium-psd/baby-fashion-cloth-wear-sale-banner-post-promotional-web-banner-psd-file_673898-771.jpg"
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
