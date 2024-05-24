import { RootState } from "../store.js";

// Selector to get store details from the state
export const selectStoreDetails = (state: RootState) =>
  state.store.storeDetails;
export const selectStoreStatus = (state: RootState) => state.store.status;
export const selectStoreError = (state: RootState) => state.store.error;
