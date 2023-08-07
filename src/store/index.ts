import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./slices/filterSlice";
import sushiSlice from "./slices/sushiSlice";
import cartSlice from "./slices/cartSlice";
import { useDispatch } from "react-redux";

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const store = configureStore({
  reducer: { filter: filterSlice, sushi: sushiSlice, cart: cartSlice },
});
