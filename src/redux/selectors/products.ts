import { RootState } from "../store.js";

export const selectProductSlice = (state: RootState) => state.product;

export const selectProducts = (state: RootState) =>
  selectProductSlice(state).items;

export const selectItemsStatus = (state: RootState) =>
  selectProductSlice(state).status;
