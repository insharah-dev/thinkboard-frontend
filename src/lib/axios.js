import axios from "axios";

const BASE_URL = process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://thinkboard-backend-gold.vercel.app";

const api = axios.create({
    baseURL: BASE_URL,
    withCredentials: true
});

export default api;