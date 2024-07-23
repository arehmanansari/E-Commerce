import React, { useState, useEffect } from "react";
import { slides, AllCategories } from "./Store";
import { DealsOfWeakSection, DealsOfDaySection } from "./Deals";
import Products from "./Products";
import Sidebar from "./Sidebar";
import "../Styles/Home.css"; // Assuming you have a CSS file for Home component

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <div className="promo-carousel">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`promo-slide ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.img})` }}
          >
            <div className="promo-text">
              <h1>{slide.title}</h1>
              <h2>{slide.subtitle}</h2>
              <input type="search" placeholder={slide.placeholder} />
              <button>Subscribe</button>
            </div>
          </div>
        ))}
      </div>
      <Sidebar />
      <div className="allcategories">
        All Categories
      </div>
      <div className="categories-container">
        {AllCategories.map((image, index) => (
          <div
            key={index}
            className="category-card"
            style={{ backgroundImage: `url(${image.img})` }}
          >
            <div className="category-text">
              <h1>{image.title}</h1>
            </div>
          </div>
        ))}
      </div>
      <div className="product-list">
        <h1>Popular Products</h1>
        <div className="products">
          <Products />
          <Products />
          <Products />
          <Products />
          <Products />
          <Products />
          <Products />
          <Products />
        </div>
      </div>
      <DealsOfWeakSection />
      <div className="products-list-category">
        <div>
          <h1 className="product-category">Top Selling</h1>
          <div className="products">
            <Products />
            <Products />
          </div>
        </div>
        <div>
          <h1 className="product-category">Trending Products</h1>
          <div className="products">
            <Products />
            <Products />
          </div>
        </div>
        <div>
          <h1 className="product-category">Recently Added</h1>
          <div className="products">
            <Products />
            <Products />
          </div>
        </div>
        <div>
          <h1 className="product-category">Top Rated</h1>
          <div className="products">
            <Products />
            <Products />
          </div>
        </div>
      </div>
      <DealsOfDaySection />
    </div>
  );
};

export default Home;
