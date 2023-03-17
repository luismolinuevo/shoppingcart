import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import productReducer from "./productSlice.js";

const store = configureStore({
  reducer: {  //may have to add .reducer
    cart: cartReducer,
    product: productReducer
  },
});

export default store;