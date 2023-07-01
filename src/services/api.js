import axios from "axios"

export const api = axios.create({
  baseURL: "https://rocketnotes-api-b8uj.onrender.com"
})