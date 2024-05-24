import { RootState } from "../store.js";

export const selectCategoriesSlice = (state: RootState) => state.category;

export const selectCategories = (state: RootState) =>
  selectCategoriesSlice(state).categories;

export const selectCategoriesStatus = (state: RootState) =>
  selectCategoriesSlice(state).status;
