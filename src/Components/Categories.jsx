import {
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
    AllCategories,
} from "./Store";

const Categories = () => {
    return (
        <div>
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
        </div>
    )
}

export default Categories