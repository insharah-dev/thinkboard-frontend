import axios from "axios";

const BASE_URL = "http://localhost:3000/api/notes" || "https://thinkboard-backend-gold.vercel.app";

const api = axios.create({
    baseURL: BASE_URL
})

export default api;
