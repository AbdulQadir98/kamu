import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter'
import cartReducer from './cartSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer
  },
})