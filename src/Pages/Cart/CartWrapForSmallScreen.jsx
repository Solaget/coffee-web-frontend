import React from "react";
import QuantityChanger from "./QuantityChanger";
import { AiOutlineClose } from "react-icons/ai";
import RemoveSingleItmFromCart from "./RemoveSingleItmFromCart";

const CartWrapForSmallScreen = ({ data: cartData }) => {
  return (
    <div className="cart-wrap-for-small-screen">
      <div className="cart-content-for-small">
        <ul className="items-wrapper">
          {cartData.map((item) => {
            const {
              price,
              quantity,
              subTotal,
              id,
              img_Src,
              selectedSize,
              title,
            } = item;

            return (
              <li className="itm-wrapper" key={id}>
                <ul className="itm-body">
                  <li className="top-detail-wrap">
                    <div className="top-body">
                      <div className="remove-btn-wrap">
                        <RemoveSingleItmFromCart/>
                      </div>
                      <div className="detail-wrap">
                        <div className="img-wrap">
                          <img src={img_Src} alt="Prodcut img Not found" />
                        </div>
                        <div className="text-wrap">
                          <h3 className="itm-title">
                            {title} - {selectedSize}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="bottom-detail-wrap">
                    <ul className="bottom-detail-body">
                      <li className="price-wrap bottom-child">
                        <div className="left-content">
                          <h3>Price</h3>
                        </div>
                        <div className="right-content">
                          <p>${price}</p>
                        </div>
                      </li>
                      <li className="quantity-wrap bottom-child">
                        <div className="left-content">
                          <h3>Quantity</h3>
                        </div>
                        <div className="right-content">
                          <QuantityChanger id={id} quantity={quantity} />
                        </div>
                      </li>
                      <li className="subtotal-wrap bottom-child">
                        <div className="left-content">
                          <h3>Subtotal</h3>
                        </div>
                        <div className="right-content">
                          <p>${subTotal}</p>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CartWrapForSmallScreen;
