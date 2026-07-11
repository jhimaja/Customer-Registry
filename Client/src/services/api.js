import axios from "axios";

const api = axios.create({
    baseURL: "baseURL: https://customer-care-backend-77zv.onrender.com/api",
});

// Automatically attach JWT token
api.interceptors.request.use((config) => {

    const token = localStorage.getItem("token");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export default api;