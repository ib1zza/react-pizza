import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IPizza } from "../../types";
import axios, { AxiosError } from "axios";
const baseQuery = "https://637b3dc210a6f23f7fa31124.mockapi.io/items";
export interface PizzaState {
  list: IPizza[];
}

const initialState: PizzaState = {
  list: [],
};

export const FetchPizzas = createAsyncThunk<
  IPizza[],
  string,
  { rejectValue: string }
>("pizza/FetchPizzas", async function (query, { rejectWithValue }) {
  console.log(query);
  const response = await axios
    .get<IPizza[]>(`${baseQuery}${query}`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      // params: {
      //   query: query,
      // },
    })
    .then((res) => res.data)
    .catch(function (error: AxiosError) {
      console.log(error.toJSON());
      return rejectWithValue(error.message);
    });
  return response;
});

export const PizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {},
});

export const {} = PizzaSlice.actions;
export default PizzaSlice.reducer;
