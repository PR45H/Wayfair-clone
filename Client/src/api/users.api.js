import axios from "axios";

// Create an axios instance for user api from the backend

const userApi = axios.create({
    baseURL: "http://localhost:3000/api/user",
    headers: {
        "Content-Type": "application/json",
    },
})

export default userApi;