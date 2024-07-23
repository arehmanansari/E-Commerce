import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowsSpin } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";
import {
  BrowseAllCategoriesDropdown,
  LocationDropdown,
  LanguageDropdown,
  CurrencyDropdown,
  MegaMenuDropdown,
  VendorsDropdown,
  PagesDropdown,
  HomeDropdown,
  BlogDropdown,
  ShopDropdown,
} from "./Dropdown";
import "../Styles/Navbar.css";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Performing search for:", searchQuery);
    // Example: Redirect to search results page
    // history.push(`/search?q=${encodeURIComponent(searchQuery)}`);
  };

  const handleAddToWishlist = (productId) => {
    console.log(`Added product ${productId} to wishlist`);
  };

  return (
    <nav className="navbar">
      <div className="top-nav">
        <p className="nav-link">
          About | My Account | WishList | Order Tracking
        </p>
        <p className="nav-link">Need Help? | Call Us</p>
        <div className="language-dropdown">
          <LanguageDropdown />
        </div>
        <div className="currency-dropdown">
          <CurrencyDropdown />
        </div>
        <div className="location-dropdown">
          <LocationDropdown />
        </div>
      </div>
      <div className="middle-nav">
        <Link to={"/"} className="logo">
          Mystiq
        </Link>
        <div className="search-bar">
          <form onSubmit={handleSearchSubmit}>
            <input
              type="search"
              className="search-input"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search products..."
            />
            <button type="submit" className="search-button">
              Search
            </button>
          </form>
        </div>
        <Link to={"/categories"}></Link>
        <div className="right-side">
          <div className="nav-links">
            <Link to={"/categories"}>Categories</Link>
            <FaArrowsSpin />
            <Link to={"/compare"}>Compare</Link>
            <IoMdHeartEmpty
              onClick={() => handleAddToWishlist("productId123")}
              style={{ cursor: "pointer" }}
            />
            <Link to={"/wishlist"}>WishList</Link>
            <Link to={"/cart"}>Cart</Link>
            <Link to={"/account"}>Account</Link>
            <Link to={"/login"}>
              Login
            </Link>
          </div>
        </div>
      </div>
      <div className="nav-section">
        <BrowseAllCategoriesDropdown />
        <ul className="main-nav">
          <Link to={"/deals"} className="nav-link">
            Deals
          </Link>
          <HomeDropdown />
          <MegaMenuDropdown />
          <ShopDropdown />
          <VendorsDropdown />
          <BlogDropdown />
          <PagesDropdown />
          <Link to={"/about"} className="nav-link">
            About
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
