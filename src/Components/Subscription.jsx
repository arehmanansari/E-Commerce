import React, { useState } from "react";
import "../Styles/Subscription.css"
import { Link } from "react-router-dom";

const SubscriptionCard = () => {
    return (
        <div className="card-container">
            <div className="subscription-card">
                <h1>
                    Wood
                </h1>
                <strong>
                    Free
                </strong>
                <p>
                    1% Cashback On All Purchases
                </p>
                <p>
                    Access to Occasional Discounts And Promotions
                </p>
                <p>
                    Access To Standard Customer Support Services
                </p>
                <Link to={"/checkout"}>
                    <button className="buy-btn">
                        Buy
                    </button>
                </Link>
            </div>
            <div className="subscription-card">
                <h1>
                    Stone
                </h1>
                <strong>
                    9.99$
                </strong>
                <p>
                    All Perks Of Wood Tier
                </p>
                <p>
                    2% Cashback On All Purchases
                </p>
                <p>
                    More Frequent Exclusive Discounts & Early Access To Sales
                </p>
                <p>
                    Priority Customer Support For Frequent Responses
                </p>
                <p>
                    Faster shipping options or free expedited shipping on all orders
                </p>
                <p>
                    Access to limited edition products
                </p>
                <Link to={"/checkout"}>
                    <button className="buy-btn">
                        Buy
                    </button>
                </Link>
            </div>
            <div className="subscription-card">
                <h1>
                    Iron
                </h1>
                <strong>
                    39.99$
                </strong>
                <p>
                    All Perks Of Stone Tier
                </p>
                <p>
                    3% Cashback On All Purchases
                </p>
                <p>
                    Exclusive discounts, early access to sales, and limited edition products
                </p>
                <p>
                    Dedicated customer support with shorter response times
                </p>
                <p>
                    Access to personalized fitness plans or diet consultations.
                </p>
                <p>
                    Earn points for every purchase that can be redeemed for discounts or free items.
                </p>
                <Link to={"/checkout"}>
                    <button className="buy-btn">
                        Buy
                    </button>
                </Link>
            </div>
            <div className="subscription-card">
                <h1>
                    Gold
                </h1>
                <strong>
                    69.99$
                </strong>
                <p>
                    All Perks Of Iron Tier
                </p>
                <p>
                    4% Cashback On All Purchases
                </p>
                <p>
                    VIP treatment with exclusive discounts, first access to new products, and personalized recommendations
                </p>
                <p>
                    Priority customer support with dedicated account managers
                </p>
                <p>
                    Special gifts or discounts during the member's birthday month
                </p>
                <Link to={"/checkout"}>
                    <button className="buy-btn">
                        Buy
                    </button>
                </Link>
            </div>
            <div className="subscription-card">
                <h1>
                    Diamond
                </h1>
                <strong>
                    99.99$
                </strong>
                <p>
                    All Perks Of Diamond Tier
                </p>
                <p>
                    5% Cashback On All Purchases
                </p>
                <p>
                    Ultra-exclusive discounts, invitations to VIP events, and personalized gifts.
                </p>
                <p>
                    24/7 priority support with a dedicated concierge service.
                </p>
                <p>
                    Free shipping on all orders
                </p>
                <Link to={"/checkout"}>
                    <button className="buy-btn">
                        Buy
                    </button>
                </Link>
            </div>
        </div>
    )
}

const Subscription = () => {
    const [selectMontly, setSelectMontly] = useState(true)
    console.log(selectMontly)
    return (
        <div>
            <div className="slider-section">
                Annualy
                <label className="switch">
                    <input type="checkbox" />
                    <span
                        className="slider round"
                        onChange={() => {
                            setSelectMontly((prev) => !prev)
                        }}
                    ></span>
                </label>
                Monthly
            </div>
            <SubscriptionCard />
        </div>
    )
}

export default Subscription