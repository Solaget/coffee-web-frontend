import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartTotal: 0,
  cartSize: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateCartItems(state, action) {
      const currItm = state.cartItems.find((item) => {
        return item.id === action.payload.curr_item.id;
      });
      const updatedItem = {
        ...action.payload.curr_item,
        quantity: action.payload.curr_quantity,
        subTotal: action.payload.curr_item.price * action.payload.curr_quantity,
      };
      if (currItm) {
        currItm.quantity = action.payload.curr_quantity;
        currItm.subTotal = currItm.price * currItm.quantity;
        currItm.selectedSize = action.payload.updated_Size;
        currItm.price = currItm.available_size.find(
          (item) => item.size === currItm.selectedSize
        ).price;
      } else {
        state.cartItems = [...state.cartItems, updatedItem];
      }
    },

    saveCartInLocalStorage(state, action) {
      const cartParsed = JSON.parse(localStorage.getItem("ALL_CART_ITEMS"));
      const stringfiedCart = JSON.stringify(state.cartItems);
      if (cartParsed == null) {
        window.localStorage.setItem("ALL_CART_ITEMS", stringfiedCart);
      }
    },
    updateCartItemsFromLocalStorage(state, action) {
      const cartParsed = JSON.parse(localStorage.getItem("ALL_CART_ITEMS"));
      state.cartItems = cartParsed;
    },
    addQuantityByOne(state, action) {
      const curr_itm_id = action.payload;

      const currItm = state.cartItems.find((item) => {
        return item.id === curr_itm_id;
      });
      if (currItm.quantity >= currItm.Cart_Limit) {
        currItm.quantity = currItm.Cart_Limit;
      } else {
        currItm.quantity += 1;
      }
      currItm.subTotal = currItm.quantity * currItm.price;
    },
    minusQuantityByOne(state, action) {
      const curr_itm_id = action.payload;
      const currItm = state.cartItems.find((item) => {
        return item.id === curr_itm_id;
      });
      if (currItm.quantity <= 1) {
        currItm.quantity = 1;
      } else {
        currItm.quantity -= 1;
      }
      currItm.subTotal = currItm.quantity * currItm.price;
    },
    removeSelectedItemFromCart(state, action) {
      const currId = action.payload;
      const getCurrIdx = state.cartItems.findIndex((item) => {
        return item.id === currId;
      });
      state.cartItems.splice(getCurrIdx, 1);
    },
    updateCartTotal(state, action) {
      const updated_cart_total = state.cartItems.reduce((a, b) => {
        return a + b.subTotal;
      }, 0);
      state.cartTotal = updated_cart_total;
    },
    updateCartSize(state, action) {
      let updated_cart_size = 0;
      for (let i = 0; i < state.cartItems.length; i++) {
        updated_cart_size += state.cartItems[i].quantity;
      }
      state.cartSize = updated_cart_size;
    },
  },
});

export default cartSlice;
export const {
  updateCartItems,
  updateCartTotal,
  addQuantityByOne,
  minusQuantityByOne,
  updateCartSize,
  updateCartItemsFromLocalStorage,
  saveCartInLocalStorage,
  removeSelectedItemFromCart,
} = cartSlice.actions;
