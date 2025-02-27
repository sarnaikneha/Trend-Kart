import React from "react";
import { Navbar } from "./Components/Navbar";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginSignup from "./Pages/LoginSignup";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/Mens" element={<ShopCategory Category="Men" />} />
          <Route path="/Womens" element={<ShopCategory Category="Women" />} />
          <Route path="/Kids" element={<ShopCategory Category="Kids" />} />
          <Route path="Rroduct" element={<Product />} />
          <Route path=":ProductId" element={<Product />} />
          <Route />
          <Route path="/cart" element={<Cart />} />
          <Route path="login" element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
