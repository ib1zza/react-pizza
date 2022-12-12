import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IPizza } from "../../types";
import axios, { AxiosError } from "axios";
const baseQuery = "https://637b3dc210a6f23f7fa31124.mockapi.io/items";
export interface PizzaState {
  list: IPizza[];
  loading: boolean;
  error: string;
}

const initialState: PizzaState = {
  list: [],
  loading: false,
  error: "",
};

export const fetchPizzas = createAsyncThunk<
  IPizza[],
  string,
  { rejectValue: string }
>("pizza/fetchPizzas", async function (query, { rejectWithValue }) {
  console.log(query);
  const response = await axios
    .get<IPizza[]>(`${baseQuery}${query}`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
    .then((res) => res.data)
    .catch(function (error: AxiosError) {
      console.log(error.toJSON());
      return rejectWithValue(error.message);
    });
  return response;
});

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchPizzas.pending, (state, action) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      }),
});

export const {} = pizzaSlice.actions;
export default pizzaSlice.reducer;
