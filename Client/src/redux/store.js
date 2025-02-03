import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import productReducer from './slices/productSlice';
import authReducer from '@/redux/slices/authSlice'

export const store = configureStore({
    reducer: {
        // Add reducers here
        cart: cartReducer,
        product: productReducer,
        auth: authReducer
    },
});

export default store;