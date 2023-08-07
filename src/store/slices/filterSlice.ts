import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface initialStateArgs {
  categoryId: number;
  sort: { name: string; sortProperty: string };
  currentPage: number;
  searchValue: string;
}

const initialState: initialStateArgs = {
  categoryId: 0,
  sort: { name: "популярністю", sortProperty: "rating" },
  currentPage: 1,
  searchValue: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setSortType(
      state,
      action: PayloadAction<{ name: string; sortProperty: string }>
    ) {
      state.sort = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export const { setCategoryId, setSortType, setCurrentPage, setSearchValue } =
  filterSlice.actions;

export default filterSlice.reducer;
