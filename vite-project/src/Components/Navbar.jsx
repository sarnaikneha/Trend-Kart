import React, { useState } from "react";
import "../Styling/Navbar.css"; // Check the correct file name
import logo from "../assets/logo.png"; // ✅ Import images
import shopingcart from "../assets/shoppingcart.png"; // ✅ Import images

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
            Shop {menu === "Shop" ? <hr /> : <></>}{" "}
          </li>
          <li
            onClick={() => {
              setMenu("Men");
            }}
          >
            Men {menu === "Men" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("Women");
            }}
          >
            Women {menu === "Women" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("Kids");
            }}
          >
            Kids {menu === "Kids" ? <hr /> : <></>}
          </li>
        </ul>
        <div className="nav-login-cart">
          <button>Login</button>
          <img
            src={shopingcart}
            alt="Cart"
            className="cart-img"
            style={{ width: "30px", height: "auto" }}
          />
          <div className="nav-cart-count">0</div>
        </div>
      </div>
    </div>
  );
};
