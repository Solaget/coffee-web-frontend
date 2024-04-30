import React from "react";
import { useSelector } from "react-redux";

const CartItemsDetail = () => {
  const { cartTotal, cartItems } = useSelector((state) => state.cart);
  return (
    <div className="top-container cart-detail-wrapper">
      <div className="top-container-body">
        <ul className="product-detail">
          <table>
            <thead>
              <tr>
                <td>Product</td>
                <td>Subtotal</td>
              </tr>
            </thead>

            <tbody>
              {cartItems.map((item) => {
                const { title, id, selectedSize, subTotal, quantity } = item;
                return (
                  <tr key={id}>
                    <td className="product-detail">
                      <h3 className="product-title">
                        {title} - {selectedSize}
                      </h3>
                      <span className="product-quantity">x {quantity}</span>
                    </td>

                    <td className="product-subtotal">
                      <h3>${subTotal}</h3>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </ul>

        <ul className="price-detail">
          <li>
            <h3>Subtotal</h3> <span>${cartTotal}</span>
          </li>
          <li>
            <h3>Shipping</h3> <span>$0</span>
          </li>
          <li>
            <h3>Total</h3> <span>${cartTotal}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CartItemsDetail;
