import { createSlice } from "@reduxjs/toolkit";

interface ModeState {
  value: "light" | "dark";
}

const getInitialMode = (): "light" | "dark" => {
  if (typeof localStorage !== "undefined") {
    const storedMode = localStorage.getItem("mode");
    if (storedMode === "light" || storedMode === "dark") {
      return storedMode;
    }
  }
  return "dark";
};

const initialState: ModeState = {
  value: getInitialMode(),
};

export const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    changeMode: (state) => {
      const newMode = state.value === "dark" ? "light" : "dark";
      state.value = newMode;

      if (typeof localStorage !== "undefined") {
        localStorage.setItem("mode", newMode);
      }
    },
  },
});

export const { changeMode } = modeSlice.actions;
export default modeSlice.reducer;
