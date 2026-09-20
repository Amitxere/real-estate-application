import React from "react";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="payment-success-page">
      <div className="success-card">
        <div className="success-icon">✓</div>

        <h1>Payment Successful!</h1>

        <p>
          Your property booking payment has been completed successfully.
        </p>

        <h2>₹50,000</h2>

        <p>Transaction ID: TXN123456789</p>

        <button onClick={() => (window.location.href = "/")}>
          Back to Home
        </button>

        <button
          className="print-receipt-button"
          onClick={() => navigate("/payment-receipt")}
        >
          View Payment Receipt
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;