import React from "react";
import { Outlet, Navigate, } from "react-router-dom";
import { useSelector } from "react-redux";
const ProtectedLayout = () => {
    console.log(Navigate);
  const { cartItems } = useSelector((state) => state.cart);
  return cartItems.length >= 1 ? <Outlet /> : <Navigate to={"/"} />;
};

export default ProtectedLayout;
