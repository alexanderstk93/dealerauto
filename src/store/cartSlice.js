import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [
    {
      id: 2,
      product: "Vossen Wheels",
      quantity: 2,
      price: "1.599",
      img: require("../assets/images/wheels/vossen/vossen2.png"),
    },
  ],
  reducers: {
    addItemToCart: (state, action) => {
      const filterForExistingItem = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (filterForExistingItem >= 0 && state.length >= 1)
        state[filterForExistingItem].quantity += action.payload.quantity;
      else state.push(action.payload);
    },
    removeItemFromCart: (state, action) => {
      state = state.filter((item) => item.id === action.id);
    },

    updateCartItem: (state, action) => {
      const filterForExistingItem = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (action.payload.quantity === 0) {
        state.splice(filterForExistingItem, 1);
        return;
      }
      state[filterForExistingItem].quantity = action.payload.quantity;
    },
    clearCart: (state) => {
      return [];
    },
  },
});

export default cartSlice.reducer;
export const { addItemToCart, removeItemFromCart, updateCartItem, clearCart } =
  cartSlice.actions;
