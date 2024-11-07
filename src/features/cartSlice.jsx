import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  carts:[]
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    clearCart: (state) => {
      state.items = [];
    },
    updateQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item && action.payload.newQuantity > 0) {
        item.quantity = action.payload.newQuantity;
      }
    },
    goToProductPage: (state, action) => {
      state.carts=action.payload
    },
  },
});

export const { addToCart, removeFromCart, clearCart, updateQuantity, goToProductPage } = cartSlice.actions;

export default cartSlice.reducer;
