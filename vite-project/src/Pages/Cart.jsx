import React, { useState } from "react";
import "../Styling/Cart.css";

const Cart = () => {
  // Sample cart items (You can replace this with actual data)
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Men's Jacket",
      price: 1999,
      quantity: 1,
      image:
        "https://m.media-amazon.com/images/I/71aaxjpDVhL._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
      id: 2,
      name: "Women's Handbag",
      price: 1499,
      quantity: 1,
      image:
        "https://m.media-amazon.com/images/I/51sLex9cbWL._AC_UL480_FMwebp_QL65_.jpg",
    },
  ]);

  // Function to update quantity
  const updateQuantity = (id, newQuantity) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
      )
    );
  };

  // Function to remove item
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Function to clear cart
  const clearCart = () => {
    setCart([]);
  };

  // Calculate Total Price
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h2>🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty. Start shopping now!</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-info">
                  <h3>{item.name}</h3>
                  <p>₹{item.price}</p>
                  <div className="quantity-controls">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    ❌ Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="cart-summary">
            <h3>Total: ₹{totalPrice.toFixed(2)}</h3>
            <button className="clear-cart" onClick={clearCart}>
              Clear Cart
            </button>
            <button className="checkout">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
