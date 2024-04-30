import { configureStore } from "@reduxjs/toolkit";
import apiSlices from "./slices/ApiSlices";
import cartSlice from "./slices/cartSlices";
import uiSlices from "./slices/uiSlices";
import BillingFormDataSlice from "./slices/BillingDetailSlices";

const store = configureStore({
  reducer: {
    api: apiSlices.reducer,
    ui: uiSlices.reducer,
    cart: cartSlice.reducer,
    billingFormDetail: BillingFormDataSlice.reducer,
  },
});

export default store;
