import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const navigate = useNavigate();

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

  // Payment failure testing state
  const [simulateFailure, setSimulateFailure] = useState(false);

  // Payment button handler
  const handlePayment = (event) => {
    event.preventDefault();

    // Remove unnecessary spaces
    const name = buyerName.trim();
    const email = buyerEmail.trim();
    const phone = buyerPhone.trim();
    const upi = upiId.trim();

    // Full Name validation
    if (!name) {
      alert("Please enter your full name.");
      return;
    }

    if (name.length < 3) {
      alert("Full name must contain at least 3 characters.");
      return;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      alert("Please enter your email address.");
      return;
    }

    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Phone number validation
    const phonePattern = /^[6-9]\d{9}$/;

    if (!phone) {
      alert("Please enter your phone number.");
      return;
    }

    if (!phonePattern.test(phone)) {
      alert("Please enter a valid 10-digit Indian phone number.");
      return;
    }

    // UPI validation
    if (selectedMethod === "UPI") {
      const upiPattern = /^[\w.-]+@[\w.-]+$/;

      if (!upi) {
        alert("Please enter your UPI ID.");
        return;
      }

      if (!upiPattern.test(upi)) {
        alert("Please enter a valid UPI ID. Example: name@upi");
        return;
      }
    }

    // Navigate based on payment status
    if (simulateFailure) {
      alert("Payment failed!");
      navigate("/payment-failure");
    } else {
      alert("Payment successful!");
      navigate("/payment-success");
    }
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

            {/* Payment Failure Testing Option */}

            <label className="failure-test-option">

              <input
                type="checkbox"
                checked={simulateFailure}
                onChange={(event) =>
                  setSimulateFailure(event.target.checked)
                }
              />

              Simulate Payment Failure (Testing)

            </label>

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