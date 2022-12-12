import { configureStore, combineReducers } from "@reduxjs/toolkit";
import filter from "./slices/filterSlice";
import pizzaSlice from "./slices/pizzaSlice";
import cartSlice from "./slices/cartSlice";
const rootReducer = combineReducers({
  filter,
  pizzaSlice,
  cartSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
