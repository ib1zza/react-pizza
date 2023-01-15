import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IPizza, IPizzaFromServer } from "../../types";
import axios, { AxiosError } from "axios";
// const baseQuery = "https://637b3dc210a6f23f7fa31124.mockapi.io/items";
const baseQuery = "https://637b3dc210a6f23f7fa31124.mockapi.io/cart";
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
  IPizzaFromServer[],
  string,
  { rejectValue: string }
>("pizza/fetchPizzas", async function (query, { rejectWithValue }) {
  console.log(query);
  const response = await axios
    .get<IPizzaFromServer[]>(`${baseQuery}${query}`, {
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

export const fetchPizza = createAsyncThunk<
  IPizza[],
  number,
  { rejectValue: string }
>("pizza/fetchPizza", async function (id, { rejectWithValue }) {
  console.log(id);
  const response = await axios
    .get<IPizza[]>(`${baseQuery}/${id}`, {
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

        state.list = action.payload.map((el) => ({
          ...el,

          types: JSON.parse(el.types),
          sizes: JSON.parse(el.sizes),
          price: JSON.parse(el.price),
          category: Number(el.category),
        }));
      }),
});

export const {} = pizzaSlice.actions;
export default pizzaSlice.reducer;
