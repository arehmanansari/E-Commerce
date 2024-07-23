import React, { useEffect, useState } from "react";
import { FaCartPlus, FaMinus, FaPlus } from "react-icons/fa";
import "../Styles/Deals.css"

export const DealsOfWeakSection = () => {
    const [quantity, setQuantity] = useState(0);
    const [rating, setRating] = useState(0);

    const handleRatingChange = (value) => {
        setRating(value);
    };

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

    const calculateTimeLeft = () => {
        const difference = +new Date("2024-10-1") - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        timerComponents.push(
            <div className="timer-box" key={interval}>
                <span>{timeLeft[interval]}</span>
                <span>{interval}</span>
            </div>
        );
    });

    return (
        <div>
            <p className="headerdeals">Deals Of The Weak</p>
            <div className="dealsofweeksection">
                <div className="dealsofweak">
                    <div className="countdown">
                        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
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
                <div className="dealsofweak">
                    <div className="countdown">
                        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
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
                <div className="dealsofweak">
                    <div className="countdown">
                        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
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
        </div>
    )
}

export const DealsOfDaySection = () => {
    const [quantity, setQuantity] = useState(0);
    const [rating, setRating] = useState(0);

    const handleRatingChange = (value) => {
        setRating(value);
    };

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
    const calculateTimeLeft = () => {
        const difference = +new Date("2024-10-1") - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        timerComponents.push(
            <div className="timer-box" key={interval}>
                <span>{timeLeft[interval]}</span>
                <span>{interval}</span>
            </div>
        );
    });
    return (
        <div>
            <p className="headerdeals">Deals Of Day</p>
            <div className="dealsofweeksection">
                <div className="dealsofweak">
                    <div className="countdown">
                        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
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
                <div className="dealsofweak">
                    <div className="countdown">
                        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
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
                <div className="dealsofweak">
                    <div className="countdown">
                        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
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
        </div>
    )
}