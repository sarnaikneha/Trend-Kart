import React, { useState } from "react";
import "./Kidsproduct.css";

const KidsProducts = [
  {
    id: 1,
    name: "Gil's Dress",
    image: "https://images.meesho.com/images/products/394441294/tadrd_400.webp",
    price: 1299,
    rating: 4.5,
  },
  {
    id: 2,
    name: "Boy's Dress",
    image: "https://images.meesho.com/images/products/410517162/9j266_400.webp",
    price: 2499,
    rating: 4.3,
  },
  {
    id: 3,
    name: "Gil's Dress",
    image: "https://images.meesho.com/images/products/341951757/jldzs_400.webp",
    price: 799,
    rating: 4.6,
  },
  {
    id: 4,
    name: "Rubber Band",
    image: "https://images.meesho.com/images/products/434266949/g05ge_400.webp",
    price: 2999,
    rating: 4.2,
  },
  {
    id: 5,
    name: "Winter Wear",
    image: "https://images.meesho.com/images/products/396690968/roolg_400.webp",
    price: 1499,
    rating: 4.7,
  },
  {
    id: 6,
    name: "Caps",
    image: "https://images.meesho.com/images/products/404184207/jwaop_400.webp",
    price: 1399,
    rating: 4.4,
  },
  {
    id: 7,
    name: "Elegant Boys",
    image: "https://images.meesho.com/images/products/423113004/mkstv_400.webp",
    price: 1299,
    rating: 4.3,
  },
  {
    id: 8,
    name: "Flip Flop",
    image: "https://images.meesho.com/images/products/442968261/wt5vg_400.webp",
    price: 1899,
    rating: 4.9,
  },
  {
    id: 9,
    name: "Girl's shandle",
    image: "https://images.meesho.com/images/products/269824862/llbas_400.webp",
    price: 2199,
    rating: 4.7,
  },
  {
    id: 10,
    name: "shoes",
    image: "https://images.meesho.com/images/products/432495825/zjkzg_400.webp",
    price: 1999,
    rating: 4.7,
  },
  {
    id: 11,
    name: "Hair Band",
    image: "https://images.meesho.com/images/products/404544669/r2ed8_400.webp",
    price: 1199,
    rating: 4.6,
  },
  {
    id: 12,
    name: " Watch",
    image: "https://images.meesho.com/images/products/404224559/knb80_400.webp",
    price: 2499,
    rating: 4.9,
  },
];

const Kidspage = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart! 🛒`);
  };

  return (
    <div className="men-page">
      <img
        src="https://img.freepik.com/free-vector/hand-drawn-kids-toys-sale-banner_23-2149651210.jpg"
        alt=""
      />
      <h2>Kid's Collection</h2>

      <div className="men-products">
        {KidsProducts.map((product) => (
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

export default Kidspage;
