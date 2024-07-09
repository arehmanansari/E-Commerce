import React from "react";
import { Link } from "react-router-dom";
import {
  BrowseAllCategoriesDropdown,
  LocationDropdown,
  LanguageDropdown,
  CurrencyDropdown,
  MegaMenuDropdown,
  VendorsDropdown,
  ShopDropdown,
} from "./Dropdown";
import { NavLink, Nav } from "react-bootstrap";
import "../Styles/Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="top-nav">
        <p className="nav-link">
          About | My Account | WishList | Order Tracking
        </p>
        <p className="nav-link">Super Value Deals - Save More With Coupons</p>
        <p className="nav-link">Need Help? | Call Us</p>
        <div className="language-dropdown">
          <LanguageDropdown />
        </div>
        <div className="currency-dropdown">
          <CurrencyDropdown />
        </div>
        <Nav>
          <NavLink href="/login">Log In</NavLink>
          <NavLink href="/signup">Sign Up</NavLink>
        </Nav>
      </div>
      <div className="middle-nav">
        <div className="logo">Mystiq</div>
        <div className="search-bar">
          <form>
            <input type="search" className="search-input" />
            <button className="search-button">Search</button>
          </form>
        </div>
        <div className="right-side">
          <div className="location-dropdown">
            <LocationDropdown />
          </div>
          <div className="nav-links">
            Compare | WishList |<Link to={"/cart"}> Cart</Link>| Account
          </div>
        </div>
      </div>
      <div className="nav-section">
        <BrowseAllCategoriesDropdown />
        <ul className="main-nav">
          <Link to={"/deals"}>Deals</Link>
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <ShopDropdown />
          <VendorsDropdown />
          <MegaMenuDropdown />
          <Link to={"/blog"}>Blog</Link>
          <Link to={"/contact"}>Contact</Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
