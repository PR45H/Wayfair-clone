import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import productReducer from './slices/productSlice';

export const store = configureStore({
    reducer: {
        // Add reducers here
        cart: cartReducer,
        product: productReducer,
    },
});

export default store;