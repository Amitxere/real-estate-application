import React from "react";
import { useNavigate } from "react-router-dom";

const transactions = [
  {
    id: 1,
    transactionId: "TXN123456789",
    property: "3 BHK Luxury Apartment",
    amount: "₹50,000",
    method: "UPI",
    date: "20 September 2026",
    status: "Success",
  },
  {
    id: 2,
    transactionId: "TXN987654321",
    property: "2 BHK Modern Flat",
    amount: "₹30,000",
    method: "Card",
    date: "18 September 2026",
    status: "Pending",
  },
  {
    id: 3,
    transactionId: "TXN456789123",
    property: "Premium Villa",
    amount: "₹75,000",
    method: "Net Banking",
    date: "15 September 2026",
    status: "Failed",
  },
];

const TransactionHistory = () => {
  const navigate = useNavigate();

  return (
    <div className="transactions-page">
      <div className="transactions-container">
        <h1>Transaction History</h1>

        <p className="transactions-subtitle">
          View all your property payment transactions.
        </p>

        <div className="transactions-table-wrapper">
          <table className="transactions-table">
            <thead>
              <tr>
                <th>Transaction ID</th>
                <th>Property</th>
                <th>Amount</th>
                <th>Payment Method</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td>{transaction.transactionId}</td>
                  <td>{transaction.property}</td>
                  <td>{transaction.amount}</td>
                  <td>{transaction.method}</td>
                  <td>{transaction.date}</td>
                  <td>
                    <span
                      className={`transaction-status ${transaction.status.toLowerCase()}`}
                    >
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button
          className="transaction-home-button"
          onClick={() => navigate("/")}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default TransactionHistory;