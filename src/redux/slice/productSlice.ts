import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { api } from "@/utils/api";
import { TProduct } from "@/types/Product";

interface ProductState {
  items: TProduct[];
  status: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: ProductState = {
  items: [],
  status: "idle",
};

export const fetchProducts = createAsyncThunk<TProduct[], string>(
  "product/fetchProducts",
  async (storeSlug: string) => {
    const response = await api.get(`stores/${storeSlug}/products`);
    return response.data;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<TProduct[]>) => {
          state.status = "succeeded";
          state.items = action.payload;
        }
      )
      .addCase(fetchProducts.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default productSlice.reducer;
