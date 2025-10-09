// import axios from "axios";

// const BASE_URL = import.meta.env.MODE === "development" ? "https://thinkboard-backend-gold.vercel.app/api/notes" : "/api"

// const api = axios.create({
//     baseURL: BASE_URL
// })

// export default api;


import axios from "axios";

const BASE_URL = import.meta.env.MODE === "development"
    ? "http://localhost:3000/api/notes"       // local backend
    : "https://thinkboard-backend-gold.vercel.app/api/notes"; // live backend

const api = axios.create({
    baseURL: BASE_URL
})

export default api;
