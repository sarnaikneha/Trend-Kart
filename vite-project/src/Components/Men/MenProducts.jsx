import React, { useState } from "react";
import "./MenProduct.css";

// Sample Men’s Products Data
const menProducts = [
  {
    id: 1,
    name: "Men's Casual Shirt",
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSDYth9fL5PGdEY88qUUx5a5RIddM9kazD7BEMXPgIzru0BPFac7xBuR1buE8IlqxwRXufrCnqQAsoZRKHBZxjKfHOvodJST-sg079Wtq4h",
    price: 1299,
    rating: 4.5,
  },
  {
    id: 2,
    name: "Men's Sneakers",
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQVW-W-a3H4gvnUZllojM4b6NSBp7IVsbIyUDTZiDHQs6Balux_QxPnIdgSu7YwEWscDQ1TVbnU1Xx9rkJIvvuHlnqBTIZRGVpdi8qRe4xU",
    price: 2499,
    rating: 4.3,
  },
  {
    id: 3,
    name: "Men's Leather Wallet",
    image:
      "https://sensesindia.in/cdn/shop/files/1-2_986c27bd-4fb8-4d82-a0a5-cd0abeaea2d0.jpg?v=1738751908",
    price: 799,
    rating: 4.6,
  },
  {
    id: 4,
    name: "Men's Sneakers",
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTvd5COZ2x6iOCdcx6eqmJaHxsCilCQCnN4aYcqnVemm0QI9z6nFVcBrjXawxsMtbakSbPf-M2n9R7WtURpOwsV7Rjjc8iNoJGeIS8vLvwtE77vPk7cG7kB&usqp=CAc",
    price: 2999,
    rating: 4.2,
  },
  {
    id: 5,
    name: "Men's shandal",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS3WfgVkvcZO5rmNjpTxgNFI0wAWwiu2IBwW3fCKg8KISpgYnWCpvDKdJMynGHveQ6F087SCbpCMdw23l2xqzgrZLdnnezCtAOcV1T06E3K3-Ejoh8QyrUupuw39TJCTiIMcMRIsnew0V8&usqp=CAc",
    price: 1499,
    rating: 4.7,
  },
  {
    id: 6,
    name: "Men's Sneakers",
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTE4_rs6BxRj_wFU75QWk7Yn2YxoH3MLeZWxAsRt1knsQqldaqqNt-u4tfl8_pSY1Vqog_9YIg_3W9mdKL0lDi5aYbi9S90shh9PeCCZQ0s2b3-lt16M64BYw",
    price: 1399,
    rating: 4.4,
  },
  {
    id: 7,
    name: "Men's Hoodie",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRadTVosbrvlJbw74TTvG6EalcuqvqD5p3Q9OSvFN02m7LG8X0BCd6uBgdloFyKvrY0bUGH8msi3UmKyuGS-Z7oqNFvbjWAEMYKcnZRlAFGqxMEQCvJ3oO2ZA&usqp=CAc",
    price: 1299,
    rating: 4.3,
  },
  {
    id: 8,
    name: "Men's Jacket",
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcThEbMAx7f1Vm3oXQwrMUqHHaT-w9gqer4imc2_PLDqxAsas5e4HiiCYKSClmHliE8srAD6R1JFU3-PKpQS8xJzfSkU6foMD1sSoXuhFAUqp9nSyIQvTS2qSw",
    price: 1899,
    rating: 4.9,
  },
  {
    id: 9,
    name: "Men's Jacket",
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTG3A3jCm9EVd5E1t5vsgC3lcG5XelnWrx99cyNbbHR0JhwKw97jtDFwbmiaIkKIY67lJ8Aah8X-iUCOv_Rq3uRwGCs-5NG6o2ugecE9pq-",
    price: 2199,
    rating: 4.7,
  },
  {
    id: 10,
    name: "Men's Watch",
    image: "https://images.meesho.com/images/products/434094613/83v0e_1200.jpg",
    price: 1999,
    rating: 4.7,
  },
  {
    id: 11,
    name: "Men's Formal pant",
    image: "https://images.meesho.com/images/products/361896370/sqjxz_1200.jpg",
    price: 1199,
    rating: 4.6,
  },
  {
    id: 12,
    name: "Men's Watch",
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR8qfdj7LCyhrwSnrb_VcEED5tFWIdSuepdUrlKfNNhZfXgB2OzF3Z7kdDXEQ1CW8Khd2aWC48fAEnveABfBiCBWChKqYpxYaaO7d4kJbkUX63U1v39qLRDlQ",
    price: 2499,
    rating: 4.9,
  },
];

const MenPage = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart! 🛒`);
  };

  return (
    <div className="men-page">
      <h2>Men's Collection</h2>

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
