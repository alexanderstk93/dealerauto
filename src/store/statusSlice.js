import { createSlice } from "@reduxjs/toolkit";

const initialState = { windowHeight: window.scrollY };

const statusSlice = createSlice({
  name: "status",
  initialState,
  reducers: {
    setWindowHeight: (state, action) =>
      void (state.windowHeight = action.payload),
  },
});

export default statusSlice.reducer;
export const { setWindowHeight } = statusSlice.actions;
