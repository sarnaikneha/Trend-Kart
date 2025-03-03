import React, { useState } from "react";
import "../Styling/Navbar.css"; // Ensure correct file path
import logo from "../assets/logo.png"; // ✅ Import images
import shopingcart from "../assets/shoppingcart.png"; // ✅ Import images
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [searchQuery, setSearchQuery] = useState(""); // ✅ State for search input
  let getUser = localStorage.getItem("user");
  getUser = JSON.parse(getUser);
  let name = getUser ? getUser?.fullName : "Login";

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img
          src={logo}
          alt="Logo"
          className="logo-img"
          style={{ width: "50px", height: "auto" }}
        />

        {/* ✅ TRENDKART Title */}
        <p className="brand-name">TRENDKART</p>

        {/* ✅ Search Bar Below TRENDKART */}
        <input
          type="text"
          className="search-bar"
          placeholder="Search for products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* ✅ Navigation Menu */}
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

      {/* ✅ Login & Cart Section */}
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
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};
