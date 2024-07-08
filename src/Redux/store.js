import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/test";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
