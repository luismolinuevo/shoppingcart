import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

const store = configureStore({
  reducer: {  //may have to add .reducer
    cart: cartReducer,
  },
});

export default store;