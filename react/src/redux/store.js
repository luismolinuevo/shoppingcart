import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

export default configureStore({
  reducer: {  //may have to add .reducer
    cart: cartReducer,
  },
});