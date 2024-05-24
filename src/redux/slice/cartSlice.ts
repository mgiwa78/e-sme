import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TProduct } from "@/types/Product";

interface CartItem {
  _id: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<TProduct>) => {
      const existingItem = state.items.find(
        (item) => item._id === action.payload._id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ _id: action.payload._id, quantity: 1 });
      }
    },
    removeItem: (state, action: PayloadAction<TProduct>) => {
      const existingItem = state.items.find(
        (item) => item._id === action.payload._id
      );
      if (existingItem) {
        state.items = state.items.filter(
          (item) => item._id !== action.payload._id
        );
      }
    },
    incrementItem: (state, action: PayloadAction<string>) => {
      const existingItem = state.items.find(
        (item) => item._id === action.payload
      );
      if (existingItem) {
        existingItem.quantity += 1;
      }
    },
    decrementItem: (state, action: PayloadAction<string>) => {
      const existingItem = state.items.find(
        (item) => item._id === action.payload
      );
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else if (existingItem) {
        state.items = state.items.filter((item) => item._id !== action.payload);
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, incrementItem, decrementItem, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
