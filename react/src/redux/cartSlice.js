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
            const existingItem = state.items.find(i => i.id === item.id);
            if(existingItem) {
                existingItem.count++;
                state.cartItemCount++
            } else {
                state.items.push({...newItem, count: 1})
            }

            state.totalCost += newItem.price;
            state.cartItemCount++;
        },

        removeItem: (state, action) => {
            const id = action.payload;
            const existingItem = state.items.find(i => i.id === item.id);
            if (item.count > 1) {
                item.count--;
              } else {
                state.items = state.items.filter(i => i.id !== id);
            }
            state.total -= item.price;
            state.cartItemCount--;
              
        },

        clearCart: (state) => {
            state.items = [],
            state.totalCost = 0,
            state.cartItemCount = 0
        }
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;