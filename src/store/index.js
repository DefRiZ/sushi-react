import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./slices/filterSlice";
import sushiSlice from "./slices/sushiSlice";
export const store = configureStore({
  reducer: { filter: filterSlice, sushi: sushiSlice },
});
