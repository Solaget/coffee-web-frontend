import React, { useEffect, useState } from "react";
import "./Style.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";
import CartWrapForBigScreen from "./CartWrapForBigScreen";
import CheckOutContainer from "./CheckOutContainer";
import CartWrapForSmallScreen from "./CartWrapForSmallScreen";
const Cart = () => {
  const { cartItems, cartSize, cartTotal } = useSelector((state) => state.cart);
  const [currWindowWidth, setCurrWindowWidth] = useState(window.innerWidth);
  const [forMobile, setForMobile] = useState(
    currWindowWidth <= 650 ? true : false
  );
  useEffect(() => {
    const handleResize = (event) => {
      setCurrWindowWidth(window.innerWidth);
      console.log('From cart');
    };
    window.addEventListener("resize", (event) => handleResize(event));

    return () => window.removeEventListener("resize", handleResize(event));
  }, []);
  return (
    <div id="cart-page" className="page-container">
      <div className="cart-page-layout">
        <header className="cart-page-header">
          <h2>Cart</h2>
        </header>
        {cartItems.length == 0 || !cartItems ? (
          <EmptyCart />
        ) : (
          <div className="cart-wrapper-layout">
            {currWindowWidth <= 700 ? (
              <CartWrapForSmallScreen data={cartItems} />
            ) : (
              <CartWrapForBigScreen data={cartItems} />
            )}
            <CheckOutContainer />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
