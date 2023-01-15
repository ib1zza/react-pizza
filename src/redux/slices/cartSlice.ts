import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPizza, ISelectedPizza } from "../../types";

export interface IPizzaInCart extends ISelectedPizza {
  count: number;
}
export interface cartState {
  totalPrice: number;
  items: IPizzaInCart[];
}

const initialState: cartState = {
  totalPrice: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //payload = ISelectedPizza
    addItem: (state, action: PayloadAction<ISelectedPizza>) => {
      const isInMas = state.items.findIndex(
        (el) =>
          el._id === action.payload._id &&
          el.types === action.payload.types &&
          el.sizes === action.payload.sizes
      );
      if (isInMas === -1) {
        state.items.push({ ...action.payload, count: 1 });
      } else {
        state.items[isInMas].count++;
      }
      state.totalPrice += action.payload.price;
    },
    removeItem: (state, action: PayloadAction<ISelectedPizza>) => {
      const index = state.items.findIndex(
        (el) =>
          el._id === action.payload._id &&
          el.types === action.payload.types &&
          el.sizes === action.payload.sizes
      );
      if (index === -1) return;

      state.totalPrice -= state.items[index].price;
      state.items[index].count === 1
        ? (state.items = state.items
            .slice(0, index)
            .concat(state.items.slice(index + 1)))
        : (state.items[index].count -= 1);
    },
    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
