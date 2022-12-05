import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type SortPropertyOptions =
  | "rating"
  | "price"
  | "title"
  | "-rating"
  | "-price"
  | "-title";

export interface filterState {
  pageCount: number;
  categoryId: number;
  sort: {
    name: string;
    sortProperty: SortPropertyOptions;
  };
  searchQuery: string;
}

const initialState: filterState = {
  pageCount: 1,
  categoryId: 0,
  sort: {
    name: "популярности",
    sortProperty: "rating",
  },
  searchQuery: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId: (state, action: PayloadAction<number>) => {
      state.categoryId = action.payload;
    },
    setSort: (
      state,
      action: PayloadAction<{ name: string; sortProperty: SortPropertyOptions }>
    ) => {
      state.sort = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setFilters: (state, action: PayloadAction<filterState>) => {
      if (action.payload.categoryId >= 0 && action.payload.categoryId <= 4) {
      }
    },
    setPageCount: (state, action: PayloadAction<number>) => {
      state.pageCount = action.payload;
    },
  },
});

export const {
  setCategoryId,
  setSort,
  setSearchQuery,
  setFilters,
  setPageCount,
} = filterSlice.actions;
export default filterSlice.reducer;
