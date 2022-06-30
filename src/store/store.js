import { configureStore } from "@reduxjs/toolkit";
import previewReducer from "./PreviewSlice";
import statusReducer from "./statusSlice";
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    preview: previewReducer,
    status: statusReducer,
    cart: cartReducer,
  },
});

export default store;
