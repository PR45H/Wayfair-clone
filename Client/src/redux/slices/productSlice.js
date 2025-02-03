import { createSlice } from "@reduxjs/toolkit";
import productApi from "@/api/product.api";

const initialState = {
    item: [],
    isLoading: false,
    error: null
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        
    },
});

export const { } = productSlice.actions;
export default productSlice.reducer;