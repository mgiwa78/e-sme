import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
import { api } from "@/utils/api";
import { TStore } from "@/types/Store";

// Define a type for the slice state
interface StoreState {
  storeDetails: TStore | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

// Define the initial state using that type
const initialState: StoreState = {
  storeDetails: null,
  status: "idle",
  error: null,
};

// Async thunk to fetch store details
export const fetchStoreDetails = createAsyncThunk(
  "store/fetchStoreDetails",
  async (storeId: string) => {
    const response = await api.get(`stores/${storeId}`);
    return response.data;
  }
);

const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStoreDetails.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchStoreDetails.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.storeDetails = action.payload;
      })
      .addCase(fetchStoreDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch store details";
      });
  },
});

export default storeSlice.reducer;
