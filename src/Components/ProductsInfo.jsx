import React, { useState } from "react";
import Products from "./Products"
import { FaCartPlus, FaPlus, FaMinus } from "react-icons/fa";
import { FaArrowsSpin } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";
import "../Styles/ProductsInfo.css";

const ProductsInfo = () => {
    const [quantity, setQuantity] = useState(0);
    const [activeTab, setActiveTab] = useState('description');

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

    const onTabClick = (tab) => {
        setActiveTab(tab);
    };

    const AdditionalInfoContent = () => (
        <div className="info-content">
            <div className="additionalcontent-box">
                <div style={{ display: "flex", borderBottom: "1px solid black" }}>
                    <p style={{ borderRight: "1px solid black" }}>
                        Stand Up
                    </p>
                        <p >
                        35″L x 24″W x 37-45″H (front to back wheel)
                    </p>
                </div>
                <div style={{ display: "flex", borderBottom: "1px solid black" }}>
                    <p style={{ borderRight: "1px solid black" }}>
                        Folded (w/o wheels)
                    </p>
                    <p>
                        32.5″L x 18.5″W x 16.5″H
                    </p>
                </div>
                <div style={{ display: "flex", borderBottom: "1px solid black" }}>
                    <p style={{ borderRight: "1px solid black" }}>
                        Folded (w/ wheels)
                    </p>
                    <p>
                        32.5″L x 24″W x 18.5″H
                    </p>
                </div>
                <div style={{ display: "flex", borderBottom: "1px solid black" }}>
                    <p style={{ borderRight: "1px solid black" }}>
                        Door Pass Through
                    </p>
                    <p>
                        24
                    </p>
                </div>
                <div style={{ display: "flex", borderBottom: "1px solid black" }}>
                    <p style={{ borderRight: "1px solid black" }}>
                        Frame
                    </p>
                    <p>
                        Aluminum
                    </p>
                </div >
                <div style={{ display: "flex", borderBottom: "1px solid black" }}>
                    <p style={{ borderRight: "1px solid black" }}>
                        Weight (w/o wheels)
                    </p>
                    <p>
                        20 LBS
                    </p>
                </div>
                <div style={{ display: "flex", borderBottom: "1px solid black" }}>
                    <p style={{ borderRight: "1px solid black" }}>
                        Weight Capacity
                    </p>
                    <p>
                        60 LBS
                    </p>
                </div>
                <div style={{ display: "flex", borderBottom: "1px solid black" }}>
                    <p style={{ borderRight: "1px solid black" }}>
                        Width
                    </p>
                    <p>
                        24″
                    </p>
                </div>
                <div style={{ display: "flex", borderBottom: "1px solid black" }}>
                    <p style={{ borderRight: "1px solid black" }}>
                        Handle height (ground to handle)
                    </p>
                    <p>
                        37-45″
                    </p>
                </div>
                <div style={{ display: "flex", borderBottom: "1px solid black" }}>
                    <p style={{ borderRight: "1px solid black" }}>
                        Wheels
                    </p>
                    <p>
                        12″ air / wide track slick tread
                    </p>
                </div>
                <div style={{ display: "flex", borderBottom: "1px solid black" }}>
                    <p style={{ borderRight: "1px solid black" }}>
                        Seat back height
                    </p>
                    <p>
                        21.5″
                    </p>
                </div>
                <div style={{ display: "flex", borderBottom: "1px solid black" }}>
                    <p style={{ borderRight: "1px solid black" }}>
                        Head room (inside canopy)
                    </p>
                    <p>
                        25″
                    </p>
                </div>
                <div style={{ display: "flex", borderBottom: "1px solid black" }}>
                    <p style={{ borderRight: "1px solid black" }}>
                        Color
                    </p>
                    <p>
                        Black, Blue, Red, White
                    </p>
                </div>
                <div style={{ display: "flex" }}>
                    <p style={{ borderRight: "1px solid black" }}>
                        Size
                    </p>
                    <p>
                        M, S
                    </p>
                </div>
            </div>
        </div>
    );

    const ReviewsContent = () => (
        <div className="info-content">
            <p>
                <div>Customer questions & answers</div>
                nest
                Jacky Chan
                Since 2012

                Thank you very fast shipping from Poland only 3days.

                December 4, 2020 at 3:12 pm

                Reply
                nest
                Ana Rosie
                Since 2008

                Great low price and works well.

                December 4, 2020 at 3:12 pm

                Reply
                nest
                Steven Keny
                Since 2010

                Authentic and Beautiful, Love these way more than ever expected They are Great earphones

                December 4, 2020 at 3:12 pm
            </p>
        </div>
    );

    const VendorsContent = () => (
        <div className="info-content">
            <p>
                <div>Noodles Co.</div>
                (32 reviews)
                nestAddress: 5171 W Campbell Ave undefined Kent, Utah 53127 United States
                nestContact Seller:(+91) - 540-025-553
                Rating
                92%
                Ship on time
                100%
                Chat response
                89%

                Noodles & Company is an American fast-casual restaurant that offers international and American noodle dishes and pasta in addition to soups and salads.
                Noodles & Company was founded in 1995 by Aaron Kennedy and is headquartered in Broomfield, Colorado.
                The company went public in 2013 and recorded a $457 million revenue in 2017.
                In late 2018, there were 460 Noodles & Company locations across 29 states and Washington, D.C.
            </p>
        </div>
    );

    const DescriptionContent = () => (
        <div className="info-content">
            <p>
                Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart.
                Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because.
                <p className="desc-info-heading" >
                    <li className="li-header">Type Of Packing</li>
                    <h9 style={{ paddingLeft: "3rem" }}>Bottle</h9>
                </p>
                <p className="desc-info-heading" >
                    <li className="li-header">Color</li>
                    <h9 style={{ paddingLeft: "7.6rem" }}> Green, Pink, Powder Blue, Purple</h9>
                </p>
                <p className="desc-info-heading" >
                    <li className="li-header">Quantity Per Case</li>
                    <h9 style={{ paddingLeft: "2.1rem" }}>100ml</h9>
                </p>
                <p className="desc-info-heading" >
                    <li className="li-header">Ethyl Alcohol</li>
                    <h9 style={{ paddingLeft: "4.3rem" }}>70%</h9>
                </p>
                <p className="desc-info-heading" >
                    <li className="li-header">Piece In One</li>
                    <h9 style={{ paddingLeft: "4.5rem" }}>Carton</h9>
                </p>
                Laconic overheard dear woodchuck wow this outrageously taut beaver hey hello far meadowlark imitatively egregiously hugged that yikes minimally unanimous pouted flirtatiously as beaver beheld above forward energetic across this jeepers beneficently cockily less a the raucously that magic upheld far so the this where crud then below after jeez enchanting drunkenly more much wow callously irrespective limpet.
                Packaging & Delivery


                Less lion goodness that euphemistically robin expeditiously bluebird smugly scratched far while thus cackled sheepishly rigid after due one assenting regarding censorious while occasional or this more crane went more as this less much amid overhung anathematic because much held one exuberantly sheep goodness so where rat wry well concomitantly.
                Scallop or far crud plain remarkably far by thus far iguana lewd precociously and and less rattlesnake contrary caustic wow this near alas and next and pled the yikes articulate about as less cackled dalmatian in much less well jeering for the thanks blindly sentimental whimpered less across objectively fanciful grimaced wildly some wow and rose jeepers outgrew lugubrious luridly irrationally attractively dachshund.
            </p>
        </div>
    );

    return (
        <div>
            <div className="details">
                <div className="section">
                    <h1 className="heading">Lorem ipsum dolor sit amet</h1>
                    <div className="stars">★★★★★ ( 70 Reviews )</div>
                    <p className="cost">$19.99</p>
                    <p className="information">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu
                        eros ligula. Pellentesque ac auctor elit. Duis feugiat metus risus,
                        eget pulvinar elit mollis in. Etiam vulputate tincidunt elementum.
                        Praesent porttitor commodo commodo. Morbi ligula mauris, rhoncus a
                        efficitur non, elementum maximus velit.
                    </p>
                    <div className="sizes">
                        <p className="size">Size</p>
                        <input type="checkbox" />
                        <label>S</label>
                        <input type="checkbox" />
                        <label>M</label>
                        <input type="checkbox" />
                        <label>L</label>
                        <input type="checkbox" />
                        <label>XL</label>
                    </div>
                    <div className="cost-and-button">
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
                        <div className="buttons">
                            <button className="add-button">
                                <FaArrowsSpin />
                            </button>
                            <button className="add-button">
                                <IoMdHeartEmpty />
                            </button>
                        </div>
                    </div>

                    <div className="extra-info">
                        <p>SKU : v9c893m3</p>
                        <p>Availability : In Stock</p>
                        <p>Tags : Food</p>
                    </div>
                </div>
                <div style={{ paddingRight: "8rem" }}>
                    <div className="img-container">
                    </div>
                </div>
            </div>
            <div style={{ paddingLeft: "46rem", paddingRight: "9rem", paddingBottom: "1rem" }}>
                <div className="mini-image-container">
                    <div className="mini-image" style={{ borderRight: "1px solid black" }}>
                    </div>
                    <div className="mini-image">
                    </div>
                    <div className="mini-image" style={{ borderLeft: "1px solid black" }} >
                    </div>
                </div>
            </div>
            <div style={{ padding: "3rem" }}>
                <div style={{ border: "1px solid gray", borderRadius: "2.1rem", padding: "1rem" }}>
                    <div className="product-details">
                        <div className="desc-heading">
                            <button
                                className={`info-heading ${activeTab === 'description' ? 'active' : ''}`}
                                onClick={() => onTabClick('description')}
                            >
                                Description
                            </button>
                            <button
                                className={`info-heading ${activeTab === 'additionalInfo' ? 'active' : ''}`}
                                onClick={() => onTabClick('additionalInfo')}
                            >
                                Additional Info
                            </button>
                            <button
                                className={`info-heading ${activeTab === 'vendors' ? 'active' : ''}`}
                                onClick={() => onTabClick('vendors')}
                            >
                                Vendors
                            </button>
                            <button
                                className={`info-heading ${activeTab === 'reviews' ? 'active' : ''}`}
                                onClick={() => onTabClick('reviews')}
                            >
                                Reviews
                            </button>
                        </div>
                        <div className="tab-content">
                            {activeTab === 'description' && <DescriptionContent />}
                            {activeTab === 'additionalInfo' && <AdditionalInfoContent />}
                            {activeTab === 'vendors' && <VendorsContent />}
                            {activeTab === 'reviews' && <ReviewsContent />}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p className="related-p">
                    Related Products
                </p>
                <div className="related-products">
                    <Products />
                    <Products />
                    <Products />
                    <Products />
                </div>
            </div>
        </div>
    );
};

export default ProductsInfo;
