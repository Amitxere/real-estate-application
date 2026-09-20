import React from "react";
import { useNavigate } from "react-router-dom";

const PaymentFailure = () => {
  const navigate = useNavigate();

  return (
    <div className="payment-failure-page">
      <div className="failure-card">
        <div className="failure-icon">✕</div>

        <h1>Payment Failed</h1>

        <p>
          Unfortunately, your payment could not be completed.
        </p>

        <h2>₹50,000</h2>

        <p>Transaction ID: TXN123456789</p>

        <button onClick={() => navigate("/payment")}>
          Try Again
        </button>

        <button
          className="failure-home-button"
          onClick={() => navigate("/")}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default PaymentFailure;