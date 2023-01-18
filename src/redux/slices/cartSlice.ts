import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISelectedPizza } from "../../types";

const localStorageCart = JSON.parse(localStorage.getItem("pizza-cart") || "{}");
export interface IPizzaInCart extends ISelectedPizza {
  count: number;
}
export interface cartState {
  totalPrice: number;
  items: IPizzaInCart[];
}

const initialState: cartState = {
  totalPrice: localStorageCart.totalPrice || 0,
  items: localStorageCart.items || [],
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
      localStorage.setItem("pizza-cart", JSON.stringify(state));
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
      localStorage.setItem("pizza-cart", JSON.stringify(state));
    },
    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
      localStorage.setItem("pizza-cart", JSON.stringify(state));
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
