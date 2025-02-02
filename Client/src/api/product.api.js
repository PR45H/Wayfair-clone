import axios from "axios";

// Create an axios instance for product api from fakestoreapi
const productApi = axios.create({
    baseURL: "https://fakestoreapi.com",
    headers: {
        "Content-Type": "application/json",
    },
})

export default productApi;