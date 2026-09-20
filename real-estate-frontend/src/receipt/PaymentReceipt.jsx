
import React from "react";

const PaymentReceipt = () => {
  return (
    <div className="receipt-page">
      <div className="receipt-card">
        <div className="receipt-header">
          <h1>Payment Receipt</h1>
          <p>Real Estate Application</p>
        </div>

        <div className="receipt-success">
          <span>✓</span>
          <h2>Payment Successful</h2>
          <p>Thank you for your payment.</p>
        </div>

        <div className="receipt-details">
          <div className="receipt-row">
            <span>Transaction ID</span>
            <strong>TXN123456789</strong>
          </div>

          <div className="receipt-row">
            <span>Customer Name</span>
            <strong>John Doe</strong>
          </div>

          <div className="receipt-row">
            <span>Property</span>
            <strong>3 BHK Luxury Apartment</strong>
          </div>

          <div className="receipt-row">
            <span>Location</span>
            <strong>Kondapur, Hyderabad</strong>
          </div>

          <div className="receipt-row">
            <span>Payment Method</span>
            <strong>UPI</strong>
          </div>

          <div className="receipt-row">
            <span>Payment Date</span>
            <strong>20 September 2026</strong>
          </div>
        </div>

        <div className="receipt-total">
          <span>Total Paid</span>
          <h2>₹50,000</h2>
        </div>

        <button
          className="print-receipt-button"
          onClick={() => window.print()}
        >
          🖨️ Print Receipt
        </button>
      </div>
    </div>
  );
};

export default PaymentReceipt;