import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    categoryId: 0,
    sort: { name: "популярністю", sortProperty: "rating" },
  },
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSortType(state, action) {
      state.sort = action.payload;
    },
  },
});

export const { setCategoryId, setSortType } = filterSlice.actions;

export default filterSlice.reducer;
