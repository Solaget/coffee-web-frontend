import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeSelectedItemFromCart,
  updateCartItems,
} from "../../Store/slices/CartSlices";
import useToast from "../../Hooks/useToast";
import QuantityChanger from "./QuantityChanger";
import RemoveSingleItmFromCart from "./RemoveSingleItmFromCart";
const CartWrapForBigScreen = ({ data: cartData }) => {
  const dispatch = useDispatch();
  const {
    setToastType,
    ToastElement,
    setAlertMsg,
    setShowToast,
    setCustomTimeout,
  } = useToast();


  return (
    <div className="cart-wrap-for-big-screen">
      <ToastElement />
      <div className="cart-content-for-big">
        <div className="cart-table-wrap">
          <table>
            <thead className="table-header-wrapper">
              <tr className="table-header-row">
                <th className="prodcut-header-title">Product</th>
                <th className="price-header-title">Price</th>
                <th className="quantity-header-title">Quantity</th>
                <th className="subtotal-header-title">Subtotal</th>
              </tr>
            </thead>

            <tbody className="cart-table-body-wrapper">
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
                  <tr className="table-body-row" key={id}>
                   <RemoveSingleItmFromCart id={id}/>
                    <td className="product-body-layout">
                      <div className="product-img-wrap">
                        <img src={img_Src} alt="img not found" />
                      </div>
                      <div className="product-detail-wrap">
                        <h3 className="product-title">{title}</h3>
                        <div className="dash">-</div>
                        <h3 className="additonal-info">{selectedSize}</h3>
                      </div>
                    </td>

                    <td className="price-body-layout">
                      <div className="price-wrapper">
                        <h3>${price}</h3>
                      </div>
                    </td>

                    <td className="quantity-body-layout">
                      <QuantityChanger quantity={quantity} id={id} />
                    </td>

                    <td className="subtotal-body-layout">
                      <div className="subtotal-wrapper">
                        <h3>${subTotal}.00</h3>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CartWrapForBigScreen;
