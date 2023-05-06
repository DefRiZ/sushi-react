import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./slices/filterSlice";
import sushiSlice from "./slices/sushiSlice";
import cartSlice from "./slices/cartSlice";
export const store = configureStore({
  reducer: { filter: filterSlice, sushi: sushiSlice, cart: cartSlice },
});
