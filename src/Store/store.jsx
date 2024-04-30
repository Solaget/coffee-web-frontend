import { configureStore } from "@reduxjs/toolkit";
import apiSlices from "./slices/ApiSlices.js";
import cartSlice from "./slices/CartSlices.js";
import uiSlices from "./slices/uiSlices.js";
import BillingFormDataSlice from "./slices/BillingDetailSlices.js";

const store = configureStore({
  reducer: {
    api: apiSlices.reducer,
    ui: uiSlices.reducer,
    cart: cartSlice.reducer,
    billingFormDetail: BillingFormDataSlice.reducer,
  },
});

export default store;
