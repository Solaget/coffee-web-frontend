import { createSlice } from "@reduxjs/toolkit";
import logo from "../../../public/Images/Logo/main-logo.png";
import products from "../../Db/products.js";
import LocationData from "../../Db/LocationData";
const initialState = {
  logo: logo,
  products: products,
  LocationData: LocationData,
};
const apiSlices = createSlice({
  name: "mainapi",
  initialState,
  reducers: {
    updateApi() {},
  },
});

export default apiSlices;
