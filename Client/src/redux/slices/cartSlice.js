import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalAmount: 0,
    totalQuantity: 0,
    isLoading: false,
    error: null
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        // Add to cart
        addToCart: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id)
            if (existingItem) {
                state.totalQuantity += 1
            } else {
                state.items.push({...newItem, quantity:1})
            }
        },
        removeFromCart: (state, action) => {
            
        },
        clearCart: (state,action) => {
            state.items = [];
            state.totalAmount = 0;
            state.totalQuantity = 0
        },
    }
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;