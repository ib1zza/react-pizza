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
  categoryId: number;
  sort: {
    name: string;
    sortProperty: SortPropertyOptions;
  };
}

const initialState: filterState = {
  categoryId: 0,
  sort: {
    name: "популярности",
    sortProperty: "rating",
  },
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
  },
});

export const { setCategoryId, setSort } = filterSlice.actions;
export default filterSlice.reducer;
