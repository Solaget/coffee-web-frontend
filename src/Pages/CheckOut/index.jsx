import React, { useEffect } from "react";
import "./Style.css";
import { useDispatch, useSelector } from "react-redux";
import { updateBillingDetail } from "../../Store/slices/BillingDetailSlices";
import BillingDetail from "./BillingDetail";
import CartItemsDetail from "./CartItemsDetail";
import PaymentContainer from "./PaymentContainer";
const CheckoutPage = () => {
  return (
    <div id="checkout-page">
      <div className="checkoutpage-layout">
        <header className="checkout-page-header">
          <h3>Checkout</h3>
        </header>

        <main className="main-content">
          <BillingDetail />

          <div className="right-content">
            <header className="right-content-header content-header">
              <h3 className="title content-header-title">Your orders</h3>
            </header>

            <CartItemsDetail/>

           <PaymentContainer/>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CheckoutPage;
