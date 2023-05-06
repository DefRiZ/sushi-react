import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//Axios
import axios from "axios";

export const fetchSushi = createAsyncThunk(
  "sushi/fetchSushi",
  async (params) => {
    const { category, sortType, currentPage } = params;
    const { data } = await axios.get(
      `https://6450e98be1f6f1bb22a255dc.mockapi.io/items?${category}&sortBy=${sortType}&page=${currentPage}&limit=4`
    );
    return data;
  }
);

const sushiSlice = createSlice({
  name: "sushi",
  initialState: {
    items: [],
    status: "loading", // "loading", "complete", "error"
  },
  // reducers: {
  //   setItems(state, action) {
  //     state.items = action.payload;
  //   },
  // },
  extraReducers: {
    [fetchSushi.pending]: (state) => {
      state.status = "loading";
    },
    [fetchSushi.fulfilled]: (state, action) => {
      state.status = "complete";
      state.items = action.payload;
    },
    [fetchSushi.rejected]: (state, action) => {
      state.status = "error";
      state.todos = [];
    },
  },
});

export const { setItems, status } = sushiSlice.actions;
export default sushiSlice.reducer;
