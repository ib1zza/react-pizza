import { configureStore, combineReducers } from "@reduxjs/toolkit";
import filter from "./slices/filterSlice";
import pizzaSlice from "./slices/pizzaSlice";
const rootReducer = combineReducers({
  filter,
  pizzaSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
