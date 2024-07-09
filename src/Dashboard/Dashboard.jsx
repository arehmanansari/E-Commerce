import React from "react";
import "../Styles/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Welcome to Your Dashboard</h2>
        <p>Here's a summary of your activities and data.</p>
      </div>
      <div className="dashboard-content">
        <div className="section sales-section">
          <h3>Sales Overview</h3>
          <div className="sales-chart">
            {/* Placeholder for sales chart component */}
            <p>Chart goes here</p>
          </div>
        </div>
        <div className="section analytics-section">
          <h3>Analytics</h3>
          <div className="analytics">
            <div className="analytics-item">
              <h4>Visitors</h4>
              <p>1,234</p>
            </div>
            <div className="analytics-item">
              <h4>Revenue</h4>
              <p>$12,345</p>
            </div>
            <div className="analytics-item">
              <h4>Orders</h4>
              <p>567</p>
            </div>
          </div>
        </div>
        <div className="section tasks-section">
          <h3>Tasks</h3>
          <ul className="tasks-list">
            <li>Complete project A</li>
            <li>Review sales reports</li>
            <li>Prepare for meeting</li>
          </ul>
        </div>
        <div className="section recent-orders-section">
          <h3>Recent Orders</h3>
          <div className="recent-orders">
            <div className="order-item">
              <p>Order #12345</p>
              <p>Customer: John Doe</p>
              <p>Total: $100</p>
            </div>
            <div className="order-item">
              <p>Order #12346</p>
              <p>Customer: Jane Smith</p>
              <p>Total: $150</p>
            </div>
            <div className="order-item">
              <p>Order #12347</p>
              <p>Customer: Mike Johnson</p>
              <p>Total: $200</p>
            </div>
          </div>
        </div>
        <div className="section notifications-section">
          <h3>Notifications</h3>
          <ul className="notifications-list">
            <li>New order received</li>
            <li>Payment processed successfully</li>
            <li>Upcoming meeting reminder</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
