import { configureStore } from "@reduxjs/toolkit";
import previewReducer from "./PreviewSlice";
import statusReducer from "./statusSlice";

const store = configureStore({
  reducer: { preview: previewReducer, status: statusReducer },
});

export default store;
