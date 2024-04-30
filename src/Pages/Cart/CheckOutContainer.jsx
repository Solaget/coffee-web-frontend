import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CheckOutContainer = () => {
  const { cartTotal, cartItems } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const handleNavigateToCheckOut = () => {
    if (cartItems.length > 0) {
      navigate("/checkout");
    };
  };
  return (
    <div className="checkout-container">
      <div className="content-wrapper">
        <div className="checkout-box">
          <header>
            <h3 className="title">Cart totals</h3>
          </header>

          <main>
            <div className="subtotal-wrapper">
              <h3 className="subtotal-title">Subtotal</h3>
              <div className="subtotal-result">${cartTotal}</div>
            </div>
            <div className="total-wrapper">
              <h3 className="total-title">Total</h3>
              <div className="total-result">${cartTotal}</div>
            </div>
          </main>
          <div className="actions">
            <button onClick={handleNavigateToCheckOut}>
              Process to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutContainer;
