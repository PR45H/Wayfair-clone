import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userApi from "@/api/users.api";

export const registerUser = createAsyncThunk(
    '/register',
    async (userData, {rejectWithValue}) => {
        try {
            const response = await userApi.post('/register', userData);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data || "Registration failed");
        }
    }
);

export const loginUser = createAsyncThunk(
    '/login',
    async (credentials, {rejectWithValue}) => {
        try {
            const response = await userApi.post('/login', credentials);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data || "Login failed");
        }
    }
);

const initialState = {
    user: null,
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    isLoading: false,
    error: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem('token');
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
            state.isLoading = false;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        // in case of user login or registration is pending, fullfilled or rejected
        builder
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                localStorage.setItem('token', action.payload.token);
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isAuthenticated = true;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
        // Register case
            .addCase(registerUser.pending, (state) => {
                isLoading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                localStorage.setItem('token', action.payload.token);
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isAuthenticated = true;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;