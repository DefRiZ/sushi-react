import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//Axios
import axios from "axios";
import { itemsState } from "./cartSlice";

interface FetchArgs {
  category: string;
  sortType: string;
  currentPage: number;
  search: string;
}

export const fetchSushi = createAsyncThunk(
  "sushi/fetchSushi",
  async (params: FetchArgs) => {
    const { category, sortType, currentPage, search } = params;
    const { data } = await axios.get<itemsState[]>(
      `https://6450e98be1f6f1bb22a255dc.mockapi.io/items?${category}&sortBy=${sortType}&page=${currentPage}&limit=4${search}`
    );
    return data as itemsState[];
  }
);

interface initialStateArgs {
  items: itemsState[];
  status: "loading" | "complete" | "error";
}

const initialState: initialStateArgs = {
  items: [],
  status: "loading", // "loading", "complete", "error"
};

const sushiSlice = createSlice({
  name: "sushi",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSushi.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchSushi.fulfilled, (state, action) => {
      state.status = "complete";
      state.items = action.payload;
    });
    builder.addCase(fetchSushi.rejected, (state) => {
      state.status = "error";
    });
  },
  // extraReducers: {
  //   [fetchSushi.pending]: (state) => {
  //     state.status = "loading";
  //   },
  //   [fetchSushi.fulfilled]: (state, action) => {
  //     state.status = "complete";
  //     state.items = action.payload;
  //   },
  //   [fetchSushi.rejected]: (state, action) => {
  //     state.status = "error";
  //     state.items = [];
  //   },
  // },
});

export default sushiSlice.reducer;
