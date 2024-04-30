import React from "react";
import { AiOutlinePlus, AiOutlineLine } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addQuantityByOne, minusQuantityByOne } from "../../Store/slices/cartSlices";

const QuantityChanger = ({ id, quantity }) => {
  const dispatch = useDispatch();

  const MinusSingleItemQuantityByOne = (currItmId) => {
    dispatch(minusQuantityByOne(currItmId));
  };
  const AddSingleItemQuantityByOne = (currItmId) => {
    dispatch(addQuantityByOne(currItmId));
  };
  return (
    <div className="single-cart-quantity-updater">
      <button onClick={() => MinusSingleItemQuantityByOne(id)}>
        <AiOutlineLine />
      </button>
      <span className="size-counter">{quantity}</span>
      <button onClick={() => AddSingleItemQuantityByOne(id)}>
        <AiOutlinePlus />
      </button>
    </div>
  );
};

export default QuantityChanger;
