import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  windowHeight: window.scrollY,
  currentSection: { vehicles: false, wheels: true, tools: false },
};

const statusSlice = createSlice({
  name: "status",
  initialState,
  reducers: {
    setWindowHeight: (state, action) =>
      void (state.windowHeight = action.payload),
    setCurrentSection: (state, action) => {
      switch (action.payload) {
        case "vehicles": {
          state.currentSection.vehicles = true;
          state.currentSection.wheels = false;
          state.currentSection.tools = false;
          break;
        }
        case "wheels": {
          state.currentSection.vehicles = false;
          state.currentSection.wheels = true;
          state.currentSection.tools = false;
          break;
        }
        case "tools": {
          state.currentSection.vehicles = false;
          state.currentSection.wheels = false;
          state.currentSection.tools = true;
          break;
        }
        default: {
          break;
        }
      }
    },
  },
});

export default statusSlice.reducer;
export const { setWindowHeight, setCurrentSection } = statusSlice.actions;
