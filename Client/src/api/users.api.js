import axios from "axios";

// Create an axios instance for user api from the backend

const userApi = axios.create({
    baseURL: "http://localhost:5000/api",
    headers: {
        "Content-Type": "application/json",
    },
})

export default userApi;