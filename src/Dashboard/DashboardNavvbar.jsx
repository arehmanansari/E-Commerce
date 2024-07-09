import React from "react";
import "../Styles/DashboardNavbar.css";

const DashboardNavbar = () => {
  return (
    <div>
      <div className="dashboard-navbar">
        <p>Mystiq</p>
        <input type="search" />
        <div className="nav-links">
          <a href="#">
            <img src="moon-icon.png" alt="Moon Icon" />
          </a>
          <a href="#">
            <img src="bell-icon.png" alt="Bell Icon" />
          </a>
          <a href="#">
            <img src="dots-icon.png" alt="Dots Icon" />
          </a>
          <a href="#">
            <img src="user-icon.png" alt="User Icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
