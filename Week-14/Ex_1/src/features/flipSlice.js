import { createSlice } from "@reduxjs/toolkit";

const flipSlice = createSlice({
  name: "flip",
  initialState: { isLightOn: true },
  reducers: {
    flipSwitch: (state) => {
      state.isLightOn = state.isLightOn ? false : true;
    }
  }
});

export const { flipSwitch } = flipSlice.actions;
export default flipSlice.reducer;
