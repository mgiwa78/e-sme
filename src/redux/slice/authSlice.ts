// AuthSlice.ts
import { createSelector, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { TUser } from "../../types/User";

interface Auth {
  token: string;
  user: TUser | undefined;
  isAuthenticated: boolean;
  role: string;
}

const initialState: Auth | null = {
  token: "",
  user: undefined,
  isAuthenticated: false,
  role: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess(
      state,
      action: PayloadAction<{ userAuth: TUser; userJwt: string }>
    ) {
      state.isAuthenticated = true;

      state.user = action.payload.userAuth;
      state.token = action.payload.userJwt;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = undefined;
      state.token = "";
    },
    updateUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const { loginSuccess, logout, updateUser } = authSlice.actions;
export default authSlice.reducer;
