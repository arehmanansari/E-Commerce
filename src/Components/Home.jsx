import React, { useState, useEffect } from "react";
import { DealsOfWeakSection, DealsOfDaySection } from "./Deals";
import Products from "./Products";
import Sidebar from "./Sidebar";
import "../Styles/Home.css";
import {
  slides,
  YoungPeopleChoice,
  AllCategories,
  VegetablesFruits,
  BreakFastEssentials,
  DairyProducts,
  GroceryProducts,
  MeatSeaFood,
  StaitionaryShop,
  Snacks,
  BeveragesItems,
  HomeCareItems,
  PersonalCareItems,
  BabyCareItems,
  NutsItems,
  FrozenItems,
  HealthWellnessItems,
  PetProducts,
} from "./Store";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
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
      <div>
        <Sidebar />
        <div className="allcategories">
          All Categories
          <div className="categories-header">
            <div className="header-category">Vegetables</div>
            <div className="header-category">Fruits</div>
            <div className="header-category">Grocery</div>
          </div>
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
      {/* <d0 iv className="all-categories">
        <h1 className="categories">Young People's Choice</h1>
        <div className="categories-container">
          {YoungPeopleChoice.map((item, index) => (
            <div
              key={index}
              className="category-card"
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <div className="category-text">
                <h1>{item.title}</h1>
              </div>
            </div>
          ))}
        </div>
      </d0>
      <div className="all-categories">
        <h1 className="categories">Fruits & Vegetables</h1>
        <div className="categories-container">
          {VegetablesFruits.map((item, index) => (
            <div
              key={index}
              className="category-card"
              style={{ backgroundImage: `url(${item.img}` }}
            >
              <div className="category-text">
                <h1>{item.title}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="all-categories">
        <h1 className="categories">BreakFast Essentials</h1>
        <div className="categories-container">
          {BreakFastEssentials.map((item, index) => (
            <div
              key={index}
              className="category-card"
              style={{ backgroundImage: `url(${item.img}` }}
            >
              <div className="category-text">
                <h1>{item.title}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="all-categories">
        <h1 className="categories">Dairy Products</h1>
        <div className="categories-container">
          {DairyProducts.map((item, index) => (
            <div
              key={index}
              className="category-card"
              style={{ backgroundImage: `url(${item.img}` }}
            >
              <div className="category-text">
                <h1>{item.title}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="all-categories">
        <h1 className="categories">Grocery</h1>
        <div className="categories-container">
          {GroceryProducts.map((item, index) => (
            <div
              key={index}
              className="category-card"
              style={{ backgroundImage: `url(${item.img}` }}
            >
              <div className="category-text">
                <h1>{item.title}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="all-categories">
        <h1 className="categories">Meat & SeaFood</h1>
        <div className="categories-container">
          {MeatSeaFood.map((item, index) => (
            <div
              key={index}
              className="category-card"
              style={{ backgroundImage: `url(${item.img}` }}
            >
              <div className="category-text">
                <h1>{item.title}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="all-categories">
        <h1 className="categories">Stationary Shop</h1>
        <div className="categories-container">
          {StaitionaryShop.map((item, index) => (
            <div
              key={index}
              className="category-card"
              style={{ backgroundImage: `url(${item.img}` }}
            >
              <div className="category-text">
                <h1>{item.title}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="all-categories">
        <h1 className="categories">Snacks</h1>
        <div className="categories-container">
          {Snacks.map((item, index) => (
            <div
              key={index}
              className="category-card"
              style={{ backgroundImage: `url(${item.img}` }}
            >
              <div className="category-text">
                <h1>{item.title}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="all-categories">
        <h1 className="categories">Beverages</h1>
        <div className="categories-container">
          {BeveragesItems.map((item, index) => (
            <div
              key={index}
              className="category-card"
              style={{ backgroundImage: `url(${item.img}` }}
            >
              <div className="category-text">
                <h1>{item.title}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="all-categories">
        <h1 className="categories">HomeCare Items</h1>
        <div className="categories-container">
          {HomeCareItems.map((item, index) => (
            <div
              key={index}
              className="category-card"
              style={{ backgroundImage: `url(${item.img}` }}
            >
              <div className="category-text">
                <h1>{item.title}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="all-categories">
        <h1 className="categories">PersonalCare Items</h1>
        <div className="categories-container">
          {PersonalCareItems.map((item, index) => (
            <div
              key={index}
              className="category-card"
              style={{ backgroundImage: `url(${item.img}` }}
            >
              <div className="category-text">
                <h1>{item.title}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="all-categories">
        <h1 className="categories">BabyCareItems</h1>
        <div className="categories-container">
          {BabyCareItems.map((item, index) => (
            <div
              key={index}
              className="category-card"
              style={{ backgroundImage: `url(${item.img}` }}
            >
              <div className="category-text">
                <h1>{item.title}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="all-categories">
        <h1 className="categories">Nuts</h1>
        <div className="categories-container">
          {NutsItems.map((item, index) => (
            <div
              key={index}
              className="category-card"
              style={{ backgroundImage: `url(${item.img}` }}
            >
              <div className="category-text">
                <h1>{item.title}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="all-categories">
        <h1 className="categories">Frozen & Chilled Items</h1>
        <div className="categories-container">
          {FrozenItems.map((item, index) => (
            <div
              key={index}
              className="category-card"
              style={{ backgroundImage: `url(${item.img}` }}
            >
              <div className="category-text">
                <h1>{item.title}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="all-categories">
        <h1 className="categories">Health & Wellness Items</h1>
        <div className="categories-container">
          {HealthWellnessItems.map((item, index) => (
            <div
              key={index}
              className="category-card"
              style={{ backgroundImage: `url(${item.img}` }}
            >
              <div className="category-text">
                <h1>{item.title}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="all-categories">
        <h1 className="categories">Pet</h1>
        <div className="categories-container">
          {PetProducts.map((item, index) => (
            <div
              key={index}
              className="category-card"
              style={{ backgroundImage: `url(${item.img}` }}
            >
              <div className="category-text">
                <h1>{item.title}</h1>
              </div>
            </div>
          ))}
        </div>
      </div> */}
      <div className="products-list-category">
        <div className="category-section">
          <h1 className="product-category">Top Selling</h1>
          <div className="products">
            <Products />
            <Products />
          </div>
        </div>
        <div className="category-section">
          <h1 className="product-category">Trending Products</h1>
          <div className="products">
            <Products />
            <Products />
          </div>
        </div>
        <div className="category-section">
          <h1 className="product-category">Recently Added</h1>
          <div className="products">
            <Products />
            <Products />
          </div>
        </div>
        <div className="category-section">
          <h1 className="product-category">Top Rated</h1>
          <div className="products">
            <Products />
            <Products />
          </div>
        </div>
      </div>
      <DealsOfDaySection />
      <div className="banner-background"></div>
    </div>
  );
};

export default Home;
