import { createSlice } from "@reduxjs/toolkit";
import Products from "../products.js"

const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [...Products],
        searchProducts: null
    },
    reducers: {
        getProducts: (state, action) => {
            const q = action.payload;
            const keys = ["name", "category"];
                state.searchProducts = state.products.filter((item) => keys.some((key) => {
                    return item[key].toLowerCase().includes(q)}))

                if(state.searchProducts.length === state.products.length) {
                    state.searchProducts = null;
                }
                
        },

    }
})

export const {getProducts} = productSlice.actions;
export default productSlice.reducer;