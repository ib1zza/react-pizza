import { createSlice } from "@reduxjs/toolkit";
import { IPizza } from "../../types";

export interface cartState {
  totalPrice: number;
  items: IPizza[];
}

const initialState: cartState = {
  totalPrice: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {},
});

export const {} = cartSlice.actions;
export default cartSlice.reducer;
