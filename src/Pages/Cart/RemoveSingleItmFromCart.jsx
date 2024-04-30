import React from "react";
import { AiOutlineClose, AiOutlinePlus, AiOutlineLine } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { removeSelectedItemFromCart } from "../../Store/slices/CartSlices";
import useToast from "../../Hooks/useToast";

const RemoveSingleItmFromCart = ({ id }) => {
  const dispatch = useDispatch();
  const {
    setToastType,
    ToastElement,
    setAlertMsg,
    setShowToast,
    setCustomTimeout,
  } = useToast();

  const handleRemoveItem = (currId) => {
    dispatch(removeSelectedItemFromCart(currId));

    setToastType("success");
    setAlertMsg("Item was removed");
    setShowToast(true);
    setCustomTimeout(4000);
  };
  return (
    <div className="remove-cart-btn" onClick={() => handleRemoveItem(id)}>
      <AiOutlineClose />
    </div>
  );
};

export default RemoveSingleItmFromCart;
