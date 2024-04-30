import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  fname: "",
  lname: "",
  companyName: "",
  region: "",
  street: ["", ""],
  townOrCity: "",
  country: "",
  postcodeOrZip: "",
  phoneNo: "",
  emailAddress: "",
};

const BillingFormDataSlice = createSlice({
  name: "billingInfo",
  initialState,
  reducers: {
    updateBillingDetail(state, action) {
        const currName = action.payload.currName;
        const currValue = action.payload.currValue;
        state[currName] = currValue;
    },
  },
});


export const {updateBillingDetail} = BillingFormDataSlice.actions
export default BillingFormDataSlice