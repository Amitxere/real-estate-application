
import React, { useState } from "react";

const PaymentPage = () => {
  // Sample payment data
  const bookingAmount = 50000;
  const propertyPrice = 7500000;
  const remainingAmount = propertyPrice - bookingAmount;

  // Payment method state
  const [selectedMethod, setSelectedMethod] = useState("UPI");

  // Buyer information state
  const [buyerName, setBuyerName] = useState("");
  const [buyerEmail, setBuyerEmail] = useState("");
  const [buyerPhone, setBuyerPhone] = useState("");
  const [upiId, setUpiId] = useState("");

  // Payment button handler
  const handlePayment = (event) => {
    event.preventDefault();

    if (!buyerName || !buyerEmail || !buyerPhone) {
      alert("Please fill in all buyer details.");
      return;
    }

    if (selectedMethod === "UPI" && !upiId) {
      alert("Please enter your UPI ID.");
      return;
    }

    alert(
      `Payment process started using ${selectedMethod}.\nAmount: ₹${bookingAmount.toLocaleString("en-IN")}`
    );
  };

  return (
    <div className="payment-page">

      {/* Page Header */}
      <h1>Complete Your Payment</h1>

      <p>
        Secure your dream property with a safe and easy payment process.
      </p>

      <form onSubmit={handlePayment}>

        <div className="payment-layout">

          {/* Left Section */}
          <div className="payment-card">

            {/* Property Details */}
            <h2>Property Details</h2>

            <h3>3 BHK Luxury Apartment</h3>

            <p>📍 Kondapur, Hyderabad</p>

            <p>
              🛏 3 Beds | 🛁 3 Baths | 📐 1850 sq ft
            </p>

            <hr />

            {/* Buyer Information */}
            <h2>Buyer Information</h2>

            <input
              type="text"
              placeholder="Full Name"
              value={buyerName}
              onChange={(event) => setBuyerName(event.target.value)}
            />

            <input
              type="email"
              placeholder="Email Address"
              value={buyerEmail}
              onChange={(event) => setBuyerEmail(event.target.value)}
            />

            <input
              type="tel"
              placeholder="Phone Number"
              value={buyerPhone}
              onChange={(event) => setBuyerPhone(event.target.value)}
            />

            <hr />

            {/* Payment Details */}
            <h2>Payment Details</h2>

            <h3>
              ₹{bookingAmount.toLocaleString("en-IN")}
            </h3>

            <p>Booking Amount (Part Payment)</p>

            <hr />

            {/* Payment Methods */}
            <h2>Select Payment Method</h2>

            <div className="payment-methods">

              <button
                type="button"
                className={`payment-method ${
                  selectedMethod === "UPI" ? "selected-method" : ""
                }`}
                onClick={() => setSelectedMethod("UPI")}
              >
                UPI
              </button>

              <button
                type="button"
                className={`payment-method ${
                  selectedMethod === "Card" ? "selected-method" : ""
                }`}
                onClick={() => setSelectedMethod("Card")}
              >
                Card
              </button>

              <button
                type="button"
                className={`payment-method ${
                  selectedMethod === "Net Banking"
                    ? "selected-method"
                    : ""
                }`}
                onClick={() => setSelectedMethod("Net Banking")}
              >
                Net Banking
              </button>

            </div>

            {/* Selected Method Information */}
            <p>
              Selected Method: <strong>{selectedMethod}</strong>
            </p>

            {/* UPI Input */}
            {selectedMethod === "UPI" && (
              <input
                type="text"
                placeholder="Enter your UPI ID"
                value={upiId}
                onChange={(event) => setUpiId(event.target.value)}
              />
            )}

            {/* Payment Button */}
            <button type="submit" className="pay-button">
              🔒 Pay ₹{bookingAmount.toLocaleString("en-IN")}
            </button>

            <p>
              By proceeding, you agree to our Terms & Conditions
              and Privacy Policy.
            </p>

          </div>

          {/* Right Section */}
          <div className="summary-card">

            <h2>Payment Summary</h2>

            <p>
              Property Price: ₹{propertyPrice.toLocaleString("en-IN")}
            </p>

            <p>
              Booking Amount: ₹{bookingAmount.toLocaleString("en-IN")}
            </p>

            <p>
              Remaining Amount: ₹{remainingAmount.toLocaleString("en-IN")}
            </p>

            <hr />

            <h2>
              Total Payable: ₹{bookingAmount.toLocaleString("en-IN")}
            </h2>

            <p>✅ Secure and encrypted payment</p>

            <p>⚡ Instant booking confirmation</p>

            <p>🛡️ Transparent payment process</p>

          </div>

        </div>

      </form>

    </div>
  );
};

export default PaymentPage;