import React, { useState } from "react";
import "./WomenPro.css";

// Sample Men’s Products Data
const menProducts = [
  {
    id: 1,
    name: "Women Dress",
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcThcYG_s3lbxwTMkmVFNR85rBXxdbzeBU5BbTOxo6fDDHQe9AI1tH-wDtyceyLKPQvggPVikBhSq6U1TfiSf-PZkrtQyji_D8OWxQ-dwJcexVlhOty1iexdfQ",
    price: 2199,
    rating: 4.5,
  },
  {
    id: 2,
    name: "Women Dress",
    image:
      "https://www.fablestreet.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0486%2F0634%2F7416%2Fproducts%2FDR671MRON_m1.jpg%3Fv%3D1722525838&w=1920&q=75",
    price: 1099,
    rating: 4.3,
  },
  {
    id: 3,
    name: "Women's Tops",
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQHF7OVbSkTW36ezcumYOCe9WmdpFslgJsUUbYQ9hxuRjaFPVFkkNDtUfOWa4PAudU4Sb5jtuTnE4M836xJppi1k0_uNgfs4tVf_rSioAbaw7ipW46NYZZLgg&usqp=CAc",
    price: 799,
    rating: 4.6,
  },
  {
    id: 4,
    name: "Women's Sneakers",
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS6lHasiOyNRGUm0ZwRqU1X87bhdqi_lnvYyCz94w1ep3mA5ASlu5_vuloXsRe6HD5q_nN9O4ZmSQEzkIeGdFij5BK6HgVR9iYwTTeVjwYl",
    price: 899,
    rating: 4.2,
  },
  {
    id: 5,
    name: "Women's shandal",
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRGH1lpGxV6Prhc1ivtQZqPvH8UqZmNZrVN5eUP4J7na1Lkfr1HIfJDhaUG2ml8X9wQW36QKHAp-K3d-t-cduRZzFOZam6L5j2PwfkXdp9e0D2KxHY3uUna",
    price: 1499,
    rating: 4.7,
  },
  {
    id: 6,
    name: "Women's Jutti",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQd5hD1f4YY6Y-F-BEkF9n3HiNyrlcLadjD4bCyGZsrIJaE7icgnJsNnO7W2hDmr89b6NZJ0pXXAYETVCEBOYX0HeXrfxiB2esvpH4BjLI",
    price: 1399,
    rating: 4.4,
  },
  {
    id: 7,
    name: "Saree",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQZNvmvYsXCIAJ1N9KiLvfPEjsOr4wDMxRwGy4rD0Ik4kaXJCiF5o2rDBJBUpQ-gjs54kwONRPHc83F9Sp51aaPG4a6OkGd8PQO0KERQxAe",
    price: 1699,
    rating: 4.3,
  },
  {
    id: 8,
    name: "Dress",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQM0ifdQEaAm3fDQpylO9XPtu8V2vqwJDqV7wyVbrhUJeXsrNC6hZHXV806MlpZDFLQjTjOAa-vXlevZmFQbpJPFUk-btgkZgiRJeMPxjg",
    price: 2599,
    rating: 4.9,
  },
  {
    id: 9,
    name: "Dress",
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTiFt6mTPTg6RPuuvUBoa6j6khFx75Y9Owaim66OvkwbucKoUuXRLBqa0MMDrHBENtAPWAilkbWMf3AKHOO0q_6oKRjkuaX5_9K7_4UTgEocilqvw3dizfzLg",
    price: 2199,
    rating: 4.7,
  },
  {
    id: 10,
    name: "Women's Watch",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20240405/szJp/6610104516fd2c6e6aa073e4/-1117Wx1400H-4934973240-multi-MODEL.jpg",
    price: 1999,
    rating: 4.7,
  },
  {
    id: 11,
    name: "Womens bag",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRDsWAOQW_2c-n62LXgeIXYaLJOBeeYRf4iLeQs0hBWC4hzFYkdnZeapPtg3t7LFvPNUkdvZPF1UOLEZRshOZ3Ln6GPfSGacU4BIj72ZYHI",
    price: 999,
    rating: 4.6,
  },
  {
    id: 12,
    name: "Women's Watch",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20230629/9FhZ/649cd0e9a9b42d15c91be3ee/-473Wx593H-466010860-rosegold-MODEL.jpg",
    price: 2499,
    rating: 4.9,
  },
];

const womenPage = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart! 🛒`);
  };

  return (
    <div className="men-page">
      <img
        src="https://img.freepik.com/free-vector/fashion-trends-sale-banner-template_23-2150769839.jpg"
        alt=""
      />
      <h2>Women's Collection</h2>

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

export default womenPage;
