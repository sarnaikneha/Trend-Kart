import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react"; // ✅ Corrected Import
import "../Styling/Payment.css";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { totalAmount } = location.state || { totalAmount: 0 };
  const [showQRCode, setShowQRCode] = useState(false);

  const handlePayment = (method) => {
    if (method === "QR Code") {
      setShowQRCode(true);
    } else {
      alert(`Payment successful using ${method}`);
      navigate("/"); // Redirect after payment
    }
  };

  return (
    <div className="payment-page">
      <h2>💳 Secure Payment</h2>
      <p className="total-amount">
        Total Amount: <strong>₹{totalAmount.toFixed(2)}</strong>
      </p>

      <div className="payment-options">
        <button
          onClick={() => handlePayment("Credit Card")}
          className="payment-btn"
        >
          💳 Credit Card
        </button>
        <button
          onClick={() => handlePayment("Debit Card")}
          className="payment-btn"
        >
          🏦 Debit Card
        </button>
        <button onClick={() => handlePayment("UPI")} className="payment-btn">
          📱 UPI
        </button>
        <button
          onClick={() => handlePayment("Net Banking")}
          className="payment-btn"
        >
          🌐 Net Banking
        </button>
        <button onClick={() => handlePayment("QR Code")} className="qr-btn">
          📷 Pay via QR Code
        </button>
      </div>

      {showQRCode && (
        <div className="qr-section">
          <h3>Scan QR Code to Pay</h3>
          <QRCodeCanvas
            value={`upi://pay?pa=your-upi-id@upi&pn=Your Name&am=${totalAmount}&cu=INR`}
            size={180}
          />
          <p>Use any UPI app to scan and pay</p>
        </div>
      )}
    </div>
  );
};

export default Payment;
