import React from "react";
import { Link } from "react-router-dom";
import cart from "../images/cart.jpg";

function Cartbutton() {
  return (
    <div className="cart-button">
      <Link to="/cart" className="cart-button-link">
        <img src={cart} />
        <span>Cart</span>
      </Link>
    </div>
  );
}

export default Cartbutton;
