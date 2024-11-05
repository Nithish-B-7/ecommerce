import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items:[],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.items.find((item) => item.id === action.payload.id)
      if (itemInCart) {
        itemInCart.quantity += 0
      } else {
        state.items.push({ ...action.payload })
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id)
    },
    clearCart: (state) => {
      state.items = []
    },
  }
})

export const { addToCart, removeFromCart, clearCart, incrementCount, decrementCount } = cartSlice.actions

export default cartSlice.reducer
