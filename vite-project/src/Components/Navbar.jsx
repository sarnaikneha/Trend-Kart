import React, { useState } from "react";
import "../Styling/Navbar.css";
import logo from "../assets/logo.png";
import shopingcart from "../assets/shoppingcart.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [searchQuery, setSearchQuery] = useState("");
  let getUser = localStorage.getItem("user");
  getUser = getUser ? JSON.parse(getUser) : undefined;
  let name = getUser?.fullName || "Login";
  const cartCount = JSON.parse(localStorage.getItem("cart") || "[]").length;
  console.log("cartCount", cartCount);
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img
          src={logo}
          alt="Logo"
          className="logo-img"
          style={{ width: "50px", height: "auto" }}
        />

        <p className="brand-name">TRENDKART</p>

        <input
          type="text"
          className="search-bar"
          placeholder="Search for products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <ul className="nav-menu">
        <li onClick={() => setMenu("Shop")}>
          <Link to="/" className="nav-link">
            Shop
          </Link>
          {menu === "Shop" && <hr />}
        </li>
        <li onClick={() => setMenu("Men")}>
          <Link to="/Mens" className="nav-link">
            Men
          </Link>
          {menu === "Men" && <hr />}
        </li>
        <li onClick={() => setMenu("Women")}>
          <Link to="/Womens" className="nav-link">
            Women
          </Link>
          {menu === "Women" && <hr />}
        </li>
        <li onClick={() => setMenu("Kids")}>
          <Link to="/Kids" className="nav-link">
            Kids
          </Link>
          {menu === "Kids" && <hr />}
        </li>
      </ul>

      <div className="nav-login-cart">
        <Link to="/login">
          <button className="login-button">{name}</button>
        </Link>
        <Link to="/cart">
          <img
            src={shopingcart}
            alt="Cart"
            className="cart-img"
            style={{ width: "30px", height: "auto" }}
          />
        </Link>
        <div className="nav-cart-count">{cartCount}</div>
      </div>
    </div>
  );
};
