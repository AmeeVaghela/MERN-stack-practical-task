import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetch",
  async (page = 0) => {
    const res = await axios.get(`https://dummyjson.com/products?limit=8&skip=${page}`);
    return res.data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: { list: [], total: 0 },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.list = action.payload.products;
      state.total = action.payload.total;
    });
  },
});

export default productSlice.reducer;
