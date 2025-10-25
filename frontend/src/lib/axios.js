import axios from "axios"

//change this in development
const BASE_URL=import.meta.env.MODE=="development"?"http://localhost:3000/api":"https://quickchat-backend-tui2.onrender.com/api"

export const axiosInstance = axios.create({
    baseURL: BASE_URL,//if its in the development the url will be http://localhost:3000/api or else it will be "backend_url/api"
    withCredentials: true
})