import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Footer.css"

const Footer = () => {
  return (
    <div className="footer">
      <div className="leftside">
        <Link to={"/"} className="logo">Mystiq</Link>
        <p className="address-h1">Address:</p>
        <h1 className="address-h2">
          Perfume Chowk,Block-17,Gulistan-e-Johor,Karachi,Pakistan
        </h1>
        <h1>Call Us:</h1>
        <p>(+92)3498723987</p>
        <h1>E-Mail:</h1>
        <p>fakeemail123@gmail.com</p>
        <h1>Hours:</h1>
        <p>9:00 to 22:00</p>
      </div>
      <div className="links">
        <div>
          <h1>Company</h1>
          <Link to="/about">About</Link>
          <Link to="/delivery">Delivery Information</Link>
          <Link to="/privacypolicy">Privacy & Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/support">Support Center</Link>
          <Link to="/career">Careers</Link>
        </div>
        <div>
          <h1>Account</h1>
          <Link to="/login">Login</Link>
          <Link to="/cart">View cart</Link>
          <Link to="/wishlist">WishList</Link>
          <Link to="/track">Track My Order</Link>
          <Link to="/help">Help</Link>
          <Link to="/subscription">Subscription</Link>
          <Link to="/compare">Compare Products</Link>
        </div>
        <div>
          <h1>Corporate</h1>
          <Link to="/become-vendor">Become A Vendor</Link>
          <Link to="/affiliate">Affiliate Program</Link>
          <Link to="/farm-business">Farm Business</Link>
          <Link to="/farm-career">Farm Career</Link>
          <Link to="/suppliers">Our Suppliers</Link>
          <Link to="/accesibility">Accessibility</Link>
          <Link to="/promotions">Promotions</Link>
        </div>
        <div className="popular">
          <h1>Popular</h1>
          <p>Milk & Flavored Milk</p>
          <p>Butter & Margarine</p>
          <p>Egg Substitute</p>
          <p>Marmalades</p>
          <p>Sour Cream & Dips</p>
          <p>Tea & Coffee</p>
          <p>Cheese</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
