
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const plant = action.payload;
      const existing = state.items.find(item => item.id === plant.id);
      if (!existing) {
        state.items.push({ ...plant, quantity: 1 });
      }
    },
    increment: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item) item.quantity += 1;
    },
    decrement: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(i => i.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    }
  },
});

export const { addToCart, increment, decrement, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
