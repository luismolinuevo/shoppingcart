import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
      items: [],
      totalCost: 0,
      cartItemCount: 0
    },
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.items.find(i => i.id === newItem.id);
            if(existingItem) {
                existingItem.count++;
                state.cartItemCount++
            } else {
                state.items.push({...newItem, count: 1})
                state.cartItemCount++;
            }

            state.totalCost += newItem.price;
            
        },

        removeItem: (state, action) => {
            const id = action.payload;
            const existingItem = state.items.find(i => i.id === id);
            if (existingItem.count > 1) {
                existingItem.count--;
                state.cartItemCount--;
                state.totalCost -= existingItem.price;
              } else {
                state.items = state.items.filter(i => i.id !== id);
                state.cartItemCount--;
                state.totalCost -= existingItem.price;
            }
            
            
              
        },

        clearCart: (state) => {
            state.items = [],
            state.totalCost = 0,
            state.cartItemCount = 0
        }
    },
});

export const { addToCart, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;