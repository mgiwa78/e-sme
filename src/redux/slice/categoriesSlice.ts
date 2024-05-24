import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { api } from "@/utils/api";
import { TCategory } from "@/types/Category";

interface CategoryState {
  categories: TCategory[];
  status: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: CategoryState = {
  categories: [],
  status: "idle",
};

export const fetchCategories = createAsyncThunk<TCategory[], string>(
  "Category/fetchCategories",
  async (storeSlug: string) => {
    const response = await api.get(`stores/${storeSlug}/categories`);
    return response.data;
  }
);

const CategorySlice = createSlice({
  name: "Category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchCategories.fulfilled,
        (state, action: PayloadAction<TCategory[]>) => {
          state.status = "succeeded";
          state.categories = action.payload;
        }
      )
      .addCase(fetchCategories.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default CategorySlice.reducer;
