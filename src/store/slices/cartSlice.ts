import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type itemsState = {
  id: string | undefined;
  imageUrl: string;
  title: string;
  quantity: number;
  weight: number;
  price: number;
  category: number;
  rating: number;
  description: string;
  count: number;
};

interface CartSliceState {
  items: itemsState[];
  totalPrice: number;
  totalCount: number;
}

const initialState: CartSliceState = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<itemsState>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count += 1;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return sum + obj.price * obj.count;
      }, 0);
      state.totalCount = state.items.reduce((sum, obj) => {
        return sum + obj.count;
      }, 0);
    },
    minusItem(state, action: PayloadAction<itemsState>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count -= 1;
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return sum + obj.price * obj.count;
      }, 0);
      state.totalCount = state.items.reduce((sum, obj) => {
        return sum + obj.count;
      }, 0);
    },
    removeItem(state, action: PayloadAction<itemsState>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload.id);
      state.totalPrice = state.items.reduce((sum, obj) => {
        return sum + obj.price * obj.count;
      }, 0);
      state.totalCount = state.items.reduce((sum, obj) => {
        return sum + obj.count;
      }, 0);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
      state.totalCount = 0;
    },
  },
});

export const { addItem, minusItem, removeItem, clearItems } = cartSlice.actions;
export default cartSlice.reducer;
