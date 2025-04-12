import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModeState {
  value: "light" | "dark";
}

const initialState: ModeState = {
  value: "dark",
};

export const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    changeMode: (state) => {
      state.value === "dark" ? state.value = 'light' : state.value = 'dark'
    },
  },
});

export const { changeMode } = modeSlice.actions;
export default modeSlice.reducer;
