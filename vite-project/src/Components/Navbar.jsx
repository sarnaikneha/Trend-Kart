import React, { useState } from "react";
import "../Styling/Navbar.css"; // Check the correct file name
import logo from "../assets/logo.png"; // ✅ Import images
import shopingcart from "../assets/shoppingcart.png"; // ✅ Import images
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img
          src={logo}
          alt="Logo"
          className="logo-img"
          style={{ width: "50px", height: "auto" }}
        />
        {/* ✅ Use imported image */}

        <p>TRENDKART</p>
        <ul className="nav-menu">
          <li
            onClick={() => {
              setMenu("Shop");
            }}
          >
            {" "}
            <Link style={{ textDecoration: "none" }} to="/">
              Shop
            </Link>{" "}
            {menu === "Shop" ? <hr /> : <></>}{" "}
          </li>
          <li
            onClick={() => {
              setMenu("Men");
            }}
          >
            <Link style={{ textDecoration: "none" }} to="/Mens">
              Men
            </Link>
            {menu === "Mens" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("Women");
            }}
          >
            <Link style={{ textDecoration: "none" }} to="/Womens">
              Women
            </Link>
            {menu === "Women" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("Kids");
            }}
          >
            <Link style={{ textDecoration: "none" }} to="/Kids">
              Kids
            </Link>
            {menu === "Kids" ? <hr /> : <></>}
          </li>
        </ul>
        <div className="nav-login-cart">
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/cart">
            {" "}
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
    </div>
  );
};
