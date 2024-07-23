import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../Styles/Cart.css"

const Cart = () => {
  return (
    <div>
      <div className="cart">
        <FaCartPlus
          className="image"
          style={{ fontSize: "200px", paddingTop: "2rem" }}
        />
        <h1 className="No-Items"> No Items In Your Cart</h1>
        <p className="cart-ptag">Your Favourite Items Are Just A Click Away</p>
        <button className="btn-start-shopping">
          <Link to="/" className="start-shopping">
            Start Shopping
          </Link>
        </button>  
      </div>
      {/* <div className="mycart">
        <div className="my-cart">My Cart</div>
        <div className="items">
          <p>Sub Total</p> <p className="right-side-checkout">lorem</p>
        </div>
        <div className="items">
          <p>Delivery Charges</p>
          <p className="right-side-checkout">Calculated At CheckOut</p>
        </div>
        <div className="items">
          <p>Total Bill</p>
          <p className="right-side-checkout">Lorem</p>
        </div>
        <div className="items">
          <p>Your Savings</p>
          <p className="right-side-checkout"> Lorem</p>
        </div>
        <button className="btn-checkout">Proceed To Checkout</button>
      </div> */}
    </div>
  );
};

export default Cart;
