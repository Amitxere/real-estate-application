import React from "react";


const AnalyticsDashboard = () => {
  const stats = [
    {
      title: "Total Properties",
      value: "248",
      icon: "🏠",
      change: "+12%",
    },
    {
      title: "Total Sales",
      value: "₹2.4 Cr",
      icon: "💰",
      change: "+18%",
    },
    {
      title: "Active Users",
      value: "1,248",
      icon: "👥",
      change: "+8%",
    },
    {
      title: "Pending Deals",
      value: "36",
      icon: "📋",
      change: "+5%",
    },
  ];

  const monthlySales = [
    { month: "Jan", value: 45 },
    { month: "Feb", value: 65 },
    { month: "Mar", value: 50 },
    { month: "Apr", value: 80 },
    { month: "May", value: 70 },
    { month: "Jun", value: 95 },
  ];

  const recentTransactions = [
    {
      id: 1,
      customer: "Rahul Sharma",
      property: "3 BHK Apartment",
      amount: "₹75,00,000",
      status: "Completed",
    },
    {
      id: 2,
      customer: "Priya Reddy",
      property: "2 BHK Flat",
      amount: "₹52,00,000",
      status: "Pending",
    },
    {
      id: 3,
      customer: "Arjun Kumar",
      property: "Villa",
      amount: "₹1,20,00,000",
      status: "Completed",
    },
  ];

  return (
    <div className="analytics-page">
      <div className="analytics-header">
        <div>
          <h1>Analytics Dashboard</h1>
          <p>Track your real estate business performance.</p>
        </div>

        <span className="dashboard-date">📅 2026</span>
      </div>

      <div className="analytics-stats">
        {stats.map((stat) => (
          <div className="analytics-stat-card" key={stat.title}>
            <div className="stat-icon">{stat.icon}</div>
            <p>{stat.title}</p>
            <h2>{stat.value}</h2>
            <span className="stat-change">{stat.change} this month</span>
          </div>
        ))}
      </div>

      <div className="analytics-content">
        <div className="sales-card">
          <h2>Monthly Sales Overview</h2>
          <p className="chart-description">
            Property sales performance by month
          </p>

          <div className="sales-chart">
            {monthlySales.map((sale) => (
              <div className="chart-column" key={sale.month}>
                <span className="chart-value">{sale.value}L</span>

                <div
                  className="chart-bar"
                  style={{ height: `${sale.value * 2}px` }}
                ></div>

                <span className="chart-month">{sale.month}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="overview-card">
          <h2>Property Overview</h2>

          <div className="overview-row">
            <span>Available</span>
            <strong>120</strong>
          </div>

          <div className="overview-row">
            <span>Sold</span>
            <strong>85</strong>
          </div>

          <div className="overview-row">
            <span>Rented</span>
            <strong>43</strong>
          </div>
        </div>
      </div>

      <div className="transactions-card">
        <h2>Recent Transactions</h2>

        <div className="transaction-list">
          {recentTransactions.map((transaction) => (
            <div className="transaction-row" key={transaction.id}>
              <div>
                <h3>{transaction.customer}</h3>
                <p>{transaction.property}</p>
              </div>

              <strong>{transaction.amount}</strong>

              <span
                className={`transaction-status ${
                  transaction.status === "Completed"
                    ? "completed"
                    : "transaction-pending"
                }`}
              >
                {transaction.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;