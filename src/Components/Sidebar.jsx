import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Sidebar.css";

const Sidebar = () => {
  const [minPrice, setMinPrice] = useState(500);
  const [maxPrice, setMaxPrice] = useState(5000);
  const [sliderMin, setSliderMin] = useState(0);
  const [sliderMax, setSliderMax] = useState(100);

  const handleMinChange = (e) => {
    setMinPrice(e.target.value);
    setSliderMin(((e.target.value - 500) / 4500) * 100);
  };

  const handleMaxChange = (e) => {
    setMaxPrice(e.target.value);
    setSliderMax(((e.target.value - 500) / 4500) * 100);
  };

  return (
    <div className="side">
      <div className="sidebar">
        <div className="sidebar-categories">
          <p className="sidebar-category">Categories</p>
          <p className="all"> All</p>
          <div className="category">
            <Link to={"/grocery"}>Grocery</Link>
            <Link to={"/electronics"}>Electronics</Link>
            <Link to={"/clothing"}>Clothing</Link>
          </div>
        </div>
        <div className="slider-checkbox">
          <p className="fill-price">Fill by Price</p>
          <div className="price-range-slider">
            <div className="slider-track">
              <div
                className="slider-handle"
                style={{ left: `${sliderMin}%` }}
              ></div>
              <div
                className="slider-handle"
                style={{ left: `${sliderMax}%` }}
              ></div>
            </div>
            <input
              type="range"
              min="500"
              max="5500"
              value={minPrice}
              onChange={handleMinChange}
            />
            <input
              type="range"
              min="500"
              max="5500"
              value={maxPrice}
              onChange={handleMaxChange}
            />
            <div className="price-labels">
              <span>Min Price: ₹{minPrice}</span>
              <p />
              <span>Max Price: ₹{maxPrice}</span>
            </div>
          </div>{" "}
          <p>Brands</p>
          <div>
            <input type="checkbox" />
            <label htmlFor="all">All</label>
          </div>
          <div>
            <input type="checkbox" />
            <label htmlFor="brandNestle">Nestle</label>
          </div>
          <div>
            <input type="checkbox" />
            <label htmlFor="brandCocaCola">Coca-Cola</label>
          </div>
          <div>
            <input type="checkbox" />
            <label htmlFor="brandPepsiCo">PepsiCo</label>
          </div>
          <div>
            <input type="checkbox" />
            <label htmlFor="brandUnilever">Unilever</label>
          </div>
          <div>
            <input type="checkbox" />
            <label htmlFor="brandGeneralMills">General Mills</label>
          </div>
          <p>Items By Size</p>
          <div className="size">
            <div>
              <input type="checkbox" />
              <label htmlFor="sizeAll">All</label>
            </div>
            <div>
              <input type="checkbox" />
              <label htmlFor="sizeS">S</label>
            </div>
            <div>
              <input type="checkbox" />
              <label htmlFor="sizeM">M</label>
            </div>
            <div>
              <input type="checkbox" />
              <label htmlFor="sizeL">L</label>
            </div>
            <div>
              <input type="checkbox" />
              <label htmlFor="sizeXL">XL</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
