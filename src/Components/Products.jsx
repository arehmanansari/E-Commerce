import React, { useState } from "react";
import { AllProducts } from "./Store";
import { FaCartPlus, FaPlus, FaMinus } from "react-icons/fa";
import "../Styles/Products.css";
import { Link } from "react-router-dom";

const Products = () => {
  const [rating, setRating] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    setQuantity(1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(0);
    }
  };

  const handleRatingChange = (value) => {
    setRating(value);
  };

  return (
    <div className="allproducts">
      <div className="product-card">
        <Link to={"/productinfo"}>

          <div className="card-img">
            {AllProducts.map((image, index) => (
              <div key={index} style={{ backgroundImage: `url(${image.img})` }}>
                <div className="category-texts"></div>
              </div>
            ))}
          </div>
          <p className="company-name">Nestle</p>
          <p className="product-name">Lorem ipsum dolor sit amet.</p>
          <div className="rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={star <= rating ? "star filled" : "star"}
                onClick={() => handleRatingChange(star)}
              >
                ★
              </span>
            ))}
          </div>
        </Link>
        <div className="cost-and-button">
          <p className="cost">$19.99</p>
          {quantity === 0 ? (
            <button className="add" onClick={handleAddToCart}>
              <FaCartPlus />
              Add
            </button>
          ) : (
            <div className="quantity-controls">
              <button className="minus" onClick={handleDecrease}>
                <FaMinus />
              </button>
              <span className="quantity">{quantity}</span>
              <button className="plus" onClick={handleIncrease}>
                <FaPlus />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;