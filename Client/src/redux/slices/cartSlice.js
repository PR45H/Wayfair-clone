import { createSlice } from "@reduxjs/toolkit";

const initialState = {}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        // Add reducers here
    }
})

export const { } = cartSlice.actions;
export default cartSlice.reducer;