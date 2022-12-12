import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IPizzaInCart {
  pizzaId: number;
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
    //payload = id
    addItem: (state, action: PayloadAction<number>) => {
      const isInMas = state.items.findIndex(
        (el) => el.pizzaId === action.payload
      );
      if (isInMas === -1) {
        state.items.push({ pizzaId: action.payload, count: 1 });
      } else {
        state.items[isInMas].count++;
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      const index = state.items.findIndex(
        (el) => el.pizzaId === action.payload
      );
      if (index === -1) return;
      // state.items[index].count === 1;
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
