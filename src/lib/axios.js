import axios from "axios";

const BASE_URL = process.env.NODE_ENV === "development"
    ? "http://localhost:3000/api/notes"
    : "https://thinkboard-backend-gold.vercel.app/api/notes";

const api = axios.create({
    baseURL: BASE_URL,
});

export default api;