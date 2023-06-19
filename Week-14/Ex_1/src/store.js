import { configureStore } from "@reduxjs/toolkit";
import flipReducer from "./features/flipSlice";

export default configureStore({
  reducer: {
    flipSwitch: flipReducer
  }
});
