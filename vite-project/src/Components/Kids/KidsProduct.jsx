import React, { useState } from "react";
import "./KidsProduct.css";

const kidsProducts = [
  {
    id: 1,
    name: "Girl Frock",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQLK7m8kXvqjfycH2MQ_4H3TdZKhrqxJhSN4kPkEIlupVK5e5qAWGPk_HdXZtvYOvFZfQ99xoHvyqZn7GLJtLpTHrjc4DGJpK5ZJVvF1gs&usqp=CAE",
    price: 1299,
    rating: 4.5,
  },
  {
    id: 2,
    name: "Girl's Dress",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT_-9ZlQ2Yd-R6Kw1rrOlllgryDxYBNRsMv59jRh975gpEf4xTHZOPCynAUmwT-PKF1saPaBTHbEeBPWH0xXBySwr7WHDDJUOApJr1EzhZlgConN_fS0Kw2&usqp=CAE",
    price: 2499,
    rating: 4.3,
  },
  {
    id: 3,
    name: "Boy's Dress",
    image:
      "https://cdn.pixelspray.io/v2/black-bread-289bfa/ofVBQK/original/edamamma-product/EATTKBSS304-10Y/300/EATTKBSS304-10Y_1_4670.webp",
    price: 799,
    rating: 4.6,
  },
  {
    id: 4,
    name: "Kids Smart Watch",
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTl8IY4x61xikXhv9-SCQKuxdXATzTUyNl7jJ4zFBwUeCXbqivZ65DzrM0EIGYWTJuSCn2cU6_XeevSvJQ8JjcfXhzx0aPIeT_8KzjbUM2Pr7yBba_x1sP1&usqp=CAE",
    price: 2999,
    rating: 4.2,
  },
  {
    id: 5,
    name: "Ear Covers",
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSyG6nEbg1Hu9Q4pIJkcYmKSZgKttZ0nYO-LY1HNoHYMrF_b_jFDwmCzjsrJDF-R1KjBU78CTOLQ1QUjH5oOVNOvzh4D95e_S6HMm4TLhp_&usqp=CAE",
    price: 1499,
    rating: 4.7,
  },
  {
    id: 6,
    name: "Kids Winter",
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSJxa2UB3_86YIZzy-_Yfpg4l05_20x9aWvWjUS84Qtew-uCfe8F8vyqywJKIFWWB5WCZe_nBnf0c-MyFNmTtMlfot6fG0tZqZjZD42n90&usqp=CAE",
    price: 1399,
    rating: 4.4,
  },
  {
    id: 7,
    name: "Traditional",
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQRTPvnygx9s0UYlDbEVStUOHoiEYI3TZ0TvND5cz9Jtw1lLYEtfpmeNQkX33jwt6YKFOA1c-r3XSA6RfkS-MmLqBgIJbk9XFWQpqTCqQE8PXxsPXXzjKIuxw&usqp=CAE",
    price: 1299,
    rating: 4.3,
  },
  {
    id: 8,
    name: "Girl's Sanndle",
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRK-a9yFDQIZ2yG6DfVwPDkqdBS3Tw5mmo_u69Y1LqXiy8isGnPli04V5ogM0SDCsh9rvKXci9oBD7sns9bISxrsxfSAW37IUQj63wqB2Hpgnd9zJGpTDmahA&usqp=CAE",
    price: 1899,
    rating: 4.9,
  },
  {
    id: 9,
    name: "Boy's Shoes",
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTwr_b7XuoN4Yon29S_SILSTYYAicGVWYodRRScqnH7OTJAKOQEV9FYEfJH6dZG4gOO2TwurNDVDxlyeJAzbtEZD9bUfsMK62dCTSD-PHI&usqp=CAE",
    price: 2199,
    rating: 4.7,
  },
  {
    id: 10,
    name: "Traditional",
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRQBDfJoC_951GZHYiKVCwdEolyp1WR8c-0Fi3mKBzcXxBE5mBeBHpUyrvpn1m-7qMCRouM2SVbs12yQtlIVApPINn7jqzbv1anmPSsnAS0vtt3_Zl_On7P&usqp=CAE",
    price: 1999,
    rating: 4.7,
  },
  {
    id: 11,
    name: "Frock",
    image:
      "https://cdn.shopify.com/s/files/1/0266/6276/4597/files/301014681RED_1_800x.jpg?v=1740632288",
    price: 1199,
    rating: 4.6,
  },
  {
    id: 12,
    name: "Twins",
    image: "https://m.media-amazon.com/images/I/818avNVan+L.jpg",
    price: 2499,
    rating: 4.9,
  },
];

const KidsPage = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart! 🛒`);
  };

  return (
    <div className="men-page">
      <h2>Men's Collection</h2>

      <div className="men-products">
        {kidsProducts.map((product) => (
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

export default KidsPage;
